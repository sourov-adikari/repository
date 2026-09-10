import { respond } from "@/app/api/response";

export const runtime = "nodejs";

export function GET(request: Request) {
  return respond({ status: "ok", service: "portfolio-api", environment: process.env.NODE_ENV ?? "development" }, 200, request);
}