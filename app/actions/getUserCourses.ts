import db from '@/lib/db'

export const getUserCourses = async () => {
  const user = await db.user.current()
  if (user === null) return []

  const courses = await db.course.findMany({
    where: {
      users: {
        some: {
          id: user.id
        }
      }
    },
    include: {
      faculty: true,
      professor: true
    }
  })

  return courses
}
