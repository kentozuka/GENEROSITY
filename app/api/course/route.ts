import { NextResponse } from 'next/server'

import { findCourses, validateSearchParams } from '@/actions/findCourses'
import { BAD_REQUEST, lackOfRequiredFields } from '@/api/lib/response'

export async function POST(req: Request) {
  const requestJson = await req.json().catch(() => null) // not catching error results in 500
  if (!requestJson) return NextResponse.json(lackOfRequiredFields, BAD_REQUEST)

  const validatedRequest = await validateSearchParams(requestJson)

  if (validatedRequest === null)
    return NextResponse.json(lackOfRequiredFields, BAD_REQUEST)

  const { take, skip } = validatedRequest
  const { total, courses } = await findCourses(validatedRequest)

  return NextResponse.json({ courses, total, take, skip })
}
