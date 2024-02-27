import Link from 'next/link'
import Avator from '../atoms/Avator'
import Credit from '../atoms/Credit'
import Term from '../atoms/Term'
import Weekday from '../atoms/Weekday'
import ProfileDisplay from '../molecures/ProfileDisplay'
import TimeDisplay from '../molecures/TimeDisplay'
import { Button } from '../ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '../ui/card'
import Unenrollconfirmation from './UnenrollConfirmation'

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
