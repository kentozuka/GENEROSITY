import { NextResponse } from 'next/server'
import { compare, hash } from 'bcrypt'

import db from '@/lib/db'
import {
  BAD_REQUEST,
  badRequest,
  lackOfRequiredFields,
  userNotFound
} from '@/api/lib/response'

export async function POST(req: Request) {
  const user = await db.user.current()

  if (user === null) {
    return NextResponse.json(userNotFound, BAD_REQUEST)
  }

  const { currentPassword, newPassword } = await req.json().catch(() => null)
  if (!currentPassword || !newPassword) {
    return NextResponse.json(lackOfRequiredFields, BAD_REQUEST)
  }

  // validate current password
  const isValidPassword = await compare(currentPassword, user.password)
  if (!isValidPassword) {
    return NextResponse.json(
      badRequest('現在のパスワードが間違っています。'),
      BAD_REQUEST
    )
  }

  const saltRounds = 12
  const hashedPassword = await hash(newPassword, saltRounds)

  // update password
  await db.user.update({
    where: { email: user.email },
    data: {
      password: hashedPassword
    }
  })

  return NextResponse.json({
    message: 'success!'
  })
}

export async function GET(req: Request) {
  // disable this endpoint in production
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      {
        error: 'not found'
      },
      { status: 404 }
    )
  }

  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')

  const defaultPassword = 'test'
  const saltRounds = 12
  const hashedPassword = await hash(defaultPassword, saltRounds)

  if (!email) {
    return NextResponse.json({
      error: 'email not found',
      status: 400
    })
  }

  const res = await db.user.update({
    where: { email },
    data: {
      password: hashedPassword
    }
  })

  return NextResponse.json(res)
}
