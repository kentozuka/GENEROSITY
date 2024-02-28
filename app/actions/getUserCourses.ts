import db from '@/lib/db'

const include = {
  faculty: true,
  professor: true
}

const getUser = async () => await db.user.current()

export const getSpringCourses = async () => {
  const user = await getUser()
  if (user === null) return []

  const courses = await db.course.findMany({
    where: {
      term: '春学期',
      users: {
        some: {
          id: user.id
        }
      }
    },
    include
  })

  return courses
}

export const getFallCourses = async () => {
  const user = await getUser()
  if (user === null) return []

  const courses = await db.course.findMany({
    where: {
      term: '秋学期',
      users: {
        some: {
          id: user.id
        }
      }
    },
    include
  })

  return courses
}

export const getUserCourses = async () => {
  const user = await getUser()
  if (user === null) return []

  const courses = await db.course.findMany({
    where: {
      users: {
        some: {
          id: user.id
        }
      }
    },
    include
  })

  return courses
}
