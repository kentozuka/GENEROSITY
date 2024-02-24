//https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import professorData from './seeds/professors.json'
import courseData from './seeds/courses.json'
import { userData } from './userSeed'

const days = ['日', '月', '火', '水', '木', '金', '土']

interface Course {
  year: string
  faculty: '国際教養学部' | '政治経済学部'
  title: string
  professor: string[]
  time: {
    term: '春学期' | '秋学期'
    day: (typeof days)[number]
    period: number
  }
  credits: number
  subtitle: string
  description: string
  goal: string
  schedule: string
}

async function main() {
  const current = await prisma.faculty.findMany()
  if (current.length > 0) return console.log('already seeded')

  await prisma.faculty.createMany({
    data: [{ name: '国際教養学部' }, { name: '政治経済学部' }]
  })

  const { count } = await prisma.professor.createMany({
    data: professorData.map((p) => ({
      name: p
    }))
  })

  await prisma.course.createMany({
    data: (courseData as Course[]).map((c) => ({
      title: c.title,
      term: c.time.term,
      weekday: days.indexOf(c.time.day),
      period: c.time.period,
      credit: c.credits,
      subtitle: c.subtitle,
      description: c.description,
      goal: c.goal,
      schedule: c.schedule,
      facultyId: c.faculty === '国際教養学部' ? 1 : 2,
      professorId: Math.floor(Math.random() * count) + 1 // ランダムで挿入
    }))
  })

  // user seed
  const data = await userData()
  await prisma.user.createMany({ data })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
