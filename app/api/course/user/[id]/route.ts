import { NextResponse } from 'next/server'

import { BAD_REQUEST, userNotFound } from '@/api/lib/response'
import db from '@/lib/db'

export async function GET(req: Request, context: any) {
  const {
    params: { id } // id must exist on this route
  } = context

  const user = await db.user.current()

  if (user === null) {
    return NextResponse.json(userNotFound, BAD_REQUEST)
  }

  // check to see if user has the course
  const isConnected = await db.user.findFirst({
    where: {
      id: user.id, // The ID of the user you're checking
      courses: {
        some: { id }
      }
    }
  })

  return NextResponse.json({
    connected: isConnected !== null
  })
}
