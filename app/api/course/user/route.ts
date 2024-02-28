import { object, mixed, string } from 'yup'
import { NextResponse } from 'next/server'

import db from '@/lib/db'
import {
  BAD_REQUEST,
  badRequest,
  lackOfRequiredFields,
  userNotFound
} from '@/api/lib/response'

export async function GET() {
  const user = await db.user.current()
  if (!user) return NextResponse.json(userNotFound, BAD_REQUEST)

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
    },
    orderBy: {
      createdAt: 'desc'
    }
    // I won't implement pagination for now
    // take: 10, get from query params
    // skip: 0
  })

  return NextResponse.json(courses)
}

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
const possibleRequest = ['connect', 'disconnect']
type PossibleRequest = (typeof possibleRequest)[number]
const validateRequestBody = async (requestJson: any) => {
  const connectionSchema = object({
    courseId: string().required(),
    connectionType: mixed<PossibleRequest>().required().oneOf(possibleRequest)
  })

  const validatedRequest = await connectionSchema
    .validate(requestJson)
    .catch(() => null)

  return validatedRequest
}

export async function POST(req: Request) {
  // check if user is authenticated
  const user = await db.user.current()
  if (!user) return NextResponse.json(userNotFound, BAD_REQUEST)

  // parse request body
  const requestJson = await req.json().catch(() => null)
  if (!requestJson) return NextResponse.json(lackOfRequiredFields, BAD_REQUEST)

  // check if request body is valid
  const validatedRequest = await validateRequestBody(requestJson)
  if (validatedRequest === null)
    return NextResponse.json(lackOfRequiredFields, BAD_REQUEST)

  // check if course exists
  const course = await db.course.findUnique({
    where: {
      id: validatedRequest.courseId
    }
  })
  if (course === null)
    return NextResponse.json(badRequest('授業が見つかりません。'), BAD_REQUEST)

  // check if user has course already | if user doesn't have course
  const userCourseIds = await db.course.userCourse(user.id)
  const userHasCourse = userCourseIds.includes(validatedRequest.courseId)

  if (validatedRequest.connectionType === 'connect' && userHasCourse) {
    return NextResponse.json(
      badRequest('この授業はすでに登録されています。'),
      BAD_REQUEST
    )
  }

  if (validatedRequest.connectionType === 'disconnect' && !userHasCourse) {
    return NextResponse.json(
      badRequest('この授業は登録されていません。'),
      BAD_REQUEST
    )
  }

  // connect or disconnect user from course
  const result = await db.course.update({
    where: { id: validatedRequest.courseId },
    data: {
      users: {
        [validatedRequest.connectionType]: {
          id: user.id
        }
      }
    }
  })

  return NextResponse.json({
    message: `Course ${validatedRequest.connectionType}ed successfully.`,
    course: result
  })
}
