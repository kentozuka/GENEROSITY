import Link from 'next/link'

import Unenrollconfirmation from '@/components/organisms/UnenrollConfirmation'
import ProfileDisplay from '@/components/molecures/ProfileDisplay'
import TimeDisplay from '@/components/molecures/TimeDisplay'
import Credit from '@/components/atoms/Credit'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'

export default function CourseCard() {
  return (
    <Card>
      <CardHeader>
        <Link href="/detail/seminar">
          <CardTitle className="text-lg">Seminar on Communication 07</CardTitle>
        </Link>
        <CardDescription>国際教養学部</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex justify-between pb-2">
          <ProfileDisplay
            name="近藤眞理子"
            src="https://i.pravatar.cc/150?img=3"
          />
          <TimeDisplay dayIndex={2} period={2} />
          <Credit count={2} />
        </div>
      </CardContent>
      <CardFooter className="justify-center grow">
        <Unenrollconfirmation className="flex-grow" />
      </CardFooter>
    </Card>
  )
}
