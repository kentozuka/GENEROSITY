import { getServerSession } from 'next-auth'
import { Prisma } from '@prisma/client'

import { authOptions } from '@/lib/auth'

export const currentUser = () => {
  return Prisma.defineExtension((client) =>
    client.$extends({
      model: {
        user: {
          async current() {
            const session = await getServerSession(authOptions)

            if (!session?.user?.email) return null

            const user = await client.user.findUnique({
              where: {
                email: session.user.email
              }
            })

            return user
          }
        }
      }
    })
  )
}
