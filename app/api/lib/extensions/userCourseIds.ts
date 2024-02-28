import { Prisma } from '@prisma/client'

export const userCourseIds = () => {
  return Prisma.defineExtension((client) =>
    client.$extends({
      model: {
        course: {
          async userCourse(id: number) {
            const user = await client.user.findUnique({
              where: { id }
            })

            if (user === null) return []

            const courses = await client.course.findMany({
              where: {
                users: {
                  some: {
                    id: user.id
                  }
                }
              },
              select: {
                id: true
              }
            })
            const userCourseIds = courses.map((course) => course.id)

            return userCourseIds
          }
        }
      }
    })
  )
}
