// lib/prismaClient.ts
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient({
    // Reducir logs para optimizar
    log: ["error"],
    // Configurar timeouts más largos
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });
};

const globalForPrisma = globalThis as {
  prisma?: ReturnType<typeof prismaClientSingleton>;
};
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export { prisma };
