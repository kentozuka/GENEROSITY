// create salted hash password with bcript
import { Prisma } from '@prisma/client'
import { hash } from 'bcrypt'
const saltRounds = 12

const hashedPassword = async (password: string) => {
  return await hash(password, saltRounds)
}

export const userData = async (): Promise<Prisma.UserCreateManyInput[]> => [
  {
    email: 'test@test.com',
    name: 'Test User',
    password: await hashedPassword('test1234')
  },
  {
    email: 'kentozuka@ruri.waseda.jp',
    name: '飯塚健杜',
    password: await hashedPassword('generosity')
  },
  {
    email: 'anonymous@name.com',
    name: '匿名ユーザー',
    password: await hashedPassword('anonymous')
  }
]
