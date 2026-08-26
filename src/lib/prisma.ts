import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export const hasDatabase = Boolean(
  process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("localhost:5432/postgres?schema=public")
);

// One-line, secret-free diagnostic so a broken DATABASE_URL shows up in
// Vercel's function logs instead of silently falling back to static content.
try {
  if (process.env.DATABASE_URL) {
    const u = new URL(process.env.DATABASE_URL);
    console.log(
      `[prisma] DATABASE_URL host=${u.hostname} port=${u.port || "5432"} user=${u.username} hasDatabase=${hasDatabase}`
    );
  } else {
    console.log("[prisma] DATABASE_URL is not set. hasDatabase=false");
  }
} catch (e) {
  console.error("[prisma] DATABASE_URL failed to parse as a URL:", e instanceof Error ? e.message : e);
}

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Each serverless instance opens its own pool, and Supabase's pooler caps how
// many clients it will accept overall (session mode allows only 15). Left at
// the pg default of 10 per instance, a couple of concurrent instances exhaust
// it and every query starts failing — which content.ts then swallows, silently
// serving the static fallback as if the site had never been edited. Keep the
// per-instance pool tiny in production and let the pooler do the multiplexing.
const POOL_MAX = process.env.NODE_ENV === "production" ? 1 : 5;

function createPrismaClient() {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL ?? "",
    max: POOL_MAX,
  });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

// Constructing PrismaPg with a placeholder DATABASE_URL doesn't throw — the
// connection is lazy, so it only fails once a query runs, which content.ts
// already handles via try/catch around every call.
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

// Reuse the client (and its pool) across module re-evaluations in every
// environment; a fresh pool per evaluation is what multiplies connections.
globalForPrisma.prisma = prisma;
