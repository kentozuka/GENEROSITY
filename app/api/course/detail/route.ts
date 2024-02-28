import { NextResponse } from 'next/server'

import { BAD_REQUEST, badRequest } from '@/api/lib/response'
import db from '@/lib/db'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const courseId = searchParams.get('id')
  if (!courseId)
    return NextResponse.json(badRequest('id is required'), BAD_REQUEST)

  // check if course id is valid
  const course = await db.course.findUnique({
    where: {
      id: courseId
    },
    include: {
      faculty: true,
      professor: true
    }
  })
  if (course === null)
    return NextResponse.json(badRequest('授業が見つかりません。'), BAD_REQUEST)

  return NextResponse.json(course)
}
