import { currentUser } from '@/api/lib/extensions/currentUser'
import { userCourseIds } from '@/api/lib/extensions/userCourseIds'
import { PrismaClient } from '@prisma/client'

// https://www.prisma.io/docs/orm/prisma-client/client-extensions#apply-multiple-extensions-to-an-extended-client

const prismaClientSingleton = () =>
  new PrismaClient().$extends(currentUser()).$extends(userCourseIds())

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
// to prevent exhausting database connection limit
// const globalForPrisma = global as unknown as { prisma: ExtendedPrismaClient }

// const db = globalForPrisma.prisma || prisma

// if (process.env.NODE_ENV === 'production') {
//   globalForPrisma.prisma = prisma
// }

// export default db
