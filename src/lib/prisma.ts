import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export const hasDatabase = Boolean(
  process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("localhost:5432/postgres?schema=public")
);

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
