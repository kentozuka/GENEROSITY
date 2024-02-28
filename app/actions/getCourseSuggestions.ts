import db from '@/lib/db'

const take = 6
const include = {
  faculty: true,
  professor: true
}

export const getHighCreditCourses = async () => {
  const highCredit = await db.course.findMany({
    where: {
      credit: {
        gt: 3
      }
    },
    include,
    take
  })

  return highCredit
}

export const getLateTimeCourses = async () => {
  const lateTime = await db.course.findMany({
    where: {
      period: {
        gte: 4
      }
    },
    include,
    take
  })

  return lateTime
}

export const getCourseSuggestions = async () => {
  const highCredit = await getHighCreditCourses()
  const lateTime = await getLateTimeCourses()

  return {
    highCredit,
    lateTime
  }
}
