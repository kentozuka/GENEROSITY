import db from '@/lib/db'

export const getCourseById = async (id: string) => {
  const course = await db.course.findUnique({
    where: {
      id
    },
    include: {
      faculty: true,
      professor: true,
      users: true
    }
  })

  return course
}
