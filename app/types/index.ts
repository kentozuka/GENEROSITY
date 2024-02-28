import { Prisma } from '@prisma/client'

export type CompeleteCourse = Prisma.CourseGetPayload<{
  include: { professor: true; faculty: true }
}>
