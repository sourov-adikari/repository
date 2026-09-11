import type { ReactNode } from "react";

export interface Portfolio { name?: string; fullName?: string; title?: string; role?: string; location?: string; email?: string; phone?: string; about?: string; [key: string]: ReactNode; }
export interface Project { id: string | number; title?: string; name?: string; slug?: string; description?: string; subtitle?: string; longDescription?: string; category?: string; status?: string; year?: string | number; purpose?: string; solution?: string; image?: string; imageUrl?: string; technologies?: ReactNode; features?: ReactNode; highlights?: ReactNode; lessons?: ReactNode; [key: string]: ReactNode; }
export interface Skill { id?: string | number; name: string; level?: number; category?: string; focus?: string; progress?: number; [key: string]: ReactNode; }
export interface Experience { id?: string | number; year?: string; startDate?: string; endDate?: string; title?: string; role?: string; company?: string; subtitle?: string; description?: string; [key: string]: ReactNode; }
export interface Education { id?: string | number; degree?: string; school?: string; institution?: string; year?: string; startDate?: string; endDate?: string; badge?: string; details?: string[]; description?: string; [key: string]: ReactNode; }
export interface Language { id?: string | number; name: string; level?: string; [key: string]: ReactNode; }
export interface Social { id?: string | number; name?: string; platform?: string; url: string; [key: string]: ReactNode; }
export interface Service { id?: string | number; title: string; description: string; focus?: string[]; [key: string]: ReactNode; }
export interface Testimonial { name: string; role: string; content: string; image: string; rating: number; }
