import CredentialsProvider from 'next-auth/providers/credentials'
import { AuthOptions } from 'next-auth'
import { compare } from 'bcrypt'

import db from '@/lib/db'

export const authOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'メールアドレスとパスワード',
      credentials: {
        email: {
          label: 'メールアドレス',
          type: 'email',
          placeholder: 'メールアドレス'
        },
        password: { label: 'パスワード', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials) return null

        const { email, password } = credentials
        if (!email || !password) return null

        const user = await db.user.findUnique({
          where: { email }
        })

        if (user === null) return null

        const isValidPassword = await compare(password, user.password)
        if (!isValidPassword) return null

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name
        }
      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.id
      }
    }),
    jwt: ({ token, user }) => {
      if (!user) return token

      return {
        ...token,
        id: user.id
      }
    }
  }
} satisfies AuthOptions
