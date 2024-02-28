import { object, number, InferType, mixed } from 'yup'
import { Prisma } from '@prisma/client'

import db from '@/lib/db'

const possibleTerms = ['春学期', '秋学期']
const possibleFaculties = ['国際教養学部', '政治経済学部']

const requestSchema = object({
  take: number().required(),
  skip: number().required(),
  faculty: mixed<(typeof possibleTerms)[number]>()
    .oneOf(possibleFaculties)
    .nullable(),
  term: mixed<(typeof possibleTerms)[number]>().oneOf(possibleTerms).nullable(),
  weekday: number().nullable(),
  period: number().nullable()
})
type Schema = InferType<typeof requestSchema>

const conditionalAND = (validatedRequest: Schema) => {
  const AND: Prisma.CourseWhereInput[] = []

  if (validatedRequest.faculty) {
    AND.push({
      faculty: {
        name: { equals: validatedRequest.faculty }
      }
    })
  }
  if (validatedRequest.term) {
    AND.push({ term: { equals: validatedRequest.term } })
  }
  if (validatedRequest.weekday) {
    AND.push({ weekday: { equals: validatedRequest.weekday } })
  }
  if (validatedRequest.period) {
    AND.push({ period: { equals: validatedRequest.period } })
  }

  return AND
}

export const validateSearchParams = async (searchParams: any) => {
  return await requestSchema.validate(searchParams).catch(() => null)
}

export const findCourses = async (queryObject: Schema) => {
  try {
    const { take, skip } = queryObject

    const whereClause = { where: { AND: conditionalAND(queryObject) } }
    const total = await db.course.count(whereClause)
    const courses = await db.course.findMany({
      take,
      skip,
      ...whereClause,
      include: {
        faculty: true,
        professor: true
      }
    })

    return { courses, total }
  } catch {
    return { courses: [], total: 0 }
  }
}
