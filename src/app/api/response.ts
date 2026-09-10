import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { ServiceError } from "@/lib/mail";

const buckets = new Map<string, { count: number; resetAt: number }>();

export const rateLimit = (request: Request, key: string, limit: number, windowMs: number) => {
  const identifier = `${key}:${request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "anonymous"}`;
  const now = Date.now();
  const current = buckets.get(identifier);
  if (!current || current.resetAt <= now) { buckets.set(identifier, { count: 1, resetAt: now + windowMs }); return null; }
  if (current.count >= limit) return NextResponse.json({ success: false, error: { code: `${key.toUpperCase()}_RATE_LIMITED`, message: "Too many requests. Please try again later." } }, { status: 429, headers: { "Retry-After": String(Math.ceil((current.resetAt - now) / 1000)) } });
  current.count += 1;
  return null;
};

export const respond = (payload: Record<string, unknown>, status = 200, request?: Request) => NextResponse.json({ success: true, ...payload, meta: { apiVersion: "1.0", generatedAt: new Date().toISOString() } }, { status, headers: request ? { "x-request-id": request.headers.get("x-request-id") || randomUUID() } : undefined });

export const badRequest = (message: string, errors?: Record<string, unknown>, request?: Request) => NextResponse.json({ success: false, error: { code: "VALIDATION_ERROR", message, ...(errors ? { fields: errors } : {}) }, meta: { requestId: request?.headers.get("x-request-id") || randomUUID() } }, { status: 400 });

export const errorResponse = (error: unknown, request?: Request) => {
  const serviceError = error instanceof ServiceError;
  const status = serviceError ? error.status : 500;
  if (status >= 500) console.error("Unhandled API error", error instanceof Error ? error.message : error);
  return NextResponse.json({ success: false, error: { code: serviceError ? error.code : "INTERNAL_SERVER_ERROR", message: serviceError ? error.message : "Internal server error" }, meta: { requestId: request?.headers.get("x-request-id") || randomUUID() } }, { status });
};
