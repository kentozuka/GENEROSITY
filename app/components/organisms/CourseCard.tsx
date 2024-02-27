'use client'

import Link from 'next/link'
import Avator from '../atoms/Avator'
import Button from '../atoms/Button'
import Credit from '../atoms/Credit'
import Weekday from '../atoms/Weekday'
import ProfileDisplay from '../molecures/ProfileDisplay'
import TimeDisplay from '../molecures/TimeDisplay'
import { Badge } from '../ui/badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '../ui/card'
import { Course } from '@prisma/client'

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href="/detail/course-ud">
      <Card>
        <CardHeader>
          <div>
            <Badge variant="outline" className="font-normal text-xs">
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

          <p className="truncate whitespace-pre-wrap py-2">
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
