import db from '@/lib/db'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { compare, hash } from 'bcrypt'

export async function POST(req: Request) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({
      error: 'unauthenticated',
      status: 401
    })
  }

  const email = session.user?.email
  if (!email) {
    return NextResponse.json({
      error: 'unauthenticated',
      status: 401
    })
  }

  const { currentPassword, newPassword } = await req.json()
  if (!currentPassword || !newPassword) {
    return NextResponse.json({
      error: 'lacking required fields',
      status: 400
    })
  }

  const user = await db.user.findUnique({
    where: { email }
  })

  if (user === null) {
    return NextResponse.json({
      error: 'user not found',
      status: 404
    })
  }

  // validate current password
  const isValidPassword = await compare(currentPassword, user.password)
  if (!isValidPassword) {
    return NextResponse.json({
      error: '現在のパスワードが間違っています。',
      status: 400
    })
  }

  const saltRounds = 12
  const hashedPassword = await hash(newPassword, saltRounds)

  // update password
  await db.user.update({
    where: { email },
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
    return NextResponse.json({
      error: 'not found',
      status: 404
    })
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
