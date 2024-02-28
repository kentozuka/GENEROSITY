import { NextResponse } from 'next/server'
import { compare, hash } from 'bcrypt'

import db from '@/lib/db'
import {
  BAD_REQUEST,
  badRequest,
  lackOfRequiredFields,
  userNotFound
} from '@/api/lib/response'

import { userData } from '../../../../prisma/userSeed'

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

export async function GET() {
  const users = await userData()
  try {
    for (const user of users) {
      await db.user.update({
        where: {
          email: user.email
        },
        data: {
          password: user.password
        }
      })
    }
    return NextResponse.json({ message: '初期パスワードに戻しました。' })
  } catch {
    return NextResponse.json({ message: 'failed' })
  }
}
