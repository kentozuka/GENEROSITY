import { InferType, number, object, string } from 'yup'
import { NextResponse } from 'next/server'

import { BAD_REQUEST, lackOfRequiredFields } from '@/api/lib/response'
import db from '@/lib/db'
import { Prisma } from '@prisma/client'

const requestSchema = object({
  take: number().required(),
  skip: number().required(),
  faculty: string().nullable(),
  term: string().nullable(),
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

export async function POST(req: Request) {
  const requestJson = await req.json().catch(() => null) // not catching error results in 500
  if (!requestJson) return NextResponse.json(lackOfRequiredFields, BAD_REQUEST)

  const validatedRequest = await requestSchema
    .validate(requestJson)
    .catch(() => null)

  if (validatedRequest === null)
    return NextResponse.json(lackOfRequiredFields, BAD_REQUEST)

  const { take, skip } = validatedRequest

  const whereClause = { where: { AND: conditionalAND(validatedRequest) } }
  const total = await db.course.count(whereClause)
  const result = await db.course.findMany({
    take,
    skip,
    ...whereClause,
    include: {
      faculty: true,
      professor: true
    }
  })

  return NextResponse.json({ result, total, take, skip })
}
