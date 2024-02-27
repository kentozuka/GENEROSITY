'use client'

import { Course } from '@prisma/client'
import Link from 'next/link'

import ProfileDisplay from '@/components/molecures/ProfileDisplay'
import TimeDisplay from '@/components/molecures/TimeDisplay'
import { Badge } from '@/components/ui/badge'
import Credit from '@/components/atoms/Credit'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href="/detail/course-ud">
      <Card>
        <CardHeader>
          <div>
            <Badge variant="outline" className="text-xs font-normal">
              春学期
            </Badge>
          </div>
          <CardTitle className="text-lg">Seminar on Culture 08</CardTitle>
          <CardDescription>国際教養学部</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex justify-between">
            <TimeDisplay dayIndex={2} period={2} />

            <Credit count={2} />
          </div>

          <p className="py-2 truncate whitespace-pre-wrap">
            This course is designed to prepare and assist students in conducting
            resea
          </p>
          <ProfileDisplay
            name="近藤眞理子"
            src="https://i.pravatar.cc/150?img=3"
          />
        </CardContent>
      </Card>
    </Link>
  )
}
