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

function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "" });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

// Constructing PrismaPg with a placeholder DATABASE_URL doesn't throw — the
// connection is lazy, so it only fails once a query runs, which content.ts
// already handles via try/catch around every call.
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
