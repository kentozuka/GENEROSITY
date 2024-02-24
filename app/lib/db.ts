import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
// to prevent exhausting database connection limit
const globalForPrisma = global as unknown as { prisma: PrismaClient }

const db = globalForPrisma.prisma || prisma

if (process.env.NODE_ENV === 'production') {
  globalForPrisma.prisma = prisma
}

export default db
