import { CompeleteCourse } from '@/types'
import Credit from '../atoms/Credit'
import Icon from '../atoms/Icon'
import NonFunctionalTabs from '../atoms/NonFunctionalTabs'
import Term from '../atoms/Term'
import ProfileDisplay from './ProfileDisplay'
import TimeDisplay from './TimeDisplay'
import { Button } from '../ui/button'
import EnrollControlButton from './EnrollControlButton'

export default function CourseDetailContent({
  course
}: {
  course: CompeleteCourse
}) {
  return (
    <div className="py-8">
      <h1 className="text-xl">{course.title}</h1>
      <p className="text-sm text-generous-500">{course.faculty.name}</p>

      <div className="flex gap-4 py-2">
        <Credit count={course.credit} />
        <Term text={course.term} />
        <TimeDisplay dayIndex={course.weekday} period={course.period} />
      </div>
      <ProfileDisplay id={course.professor.id} name={course.professor.name} />

      <div className="flex max-w-sm gap-2 py-6">
        <EnrollControlButton courseId={course.id} />
        <Button variant="secondary">
          <Icon type="heart" />
        </Button>
      </div>

      <div className="max-w-lg">
        <NonFunctionalTabs />

        <div className="py-8">
          <div className="pb-4">
            <h2 className="text-lg">副題</h2>
            <p className="py-2 whitespace-pre-wrap text-generous-600">
              {course.subtitle || 'なし'}
            </p>
          </div>

          <div className="pb-4">
            <h2 className="text-lg">授業概要</h2>
            <p className="py-2 whitespace-pre-wrap text-generous-600">
              {course.description}
            </p>
          </div>

          <div className="pb-4">
            <h2 className="text-lg">授業計画</h2>
            <p className="py-2 whitespace-pre-wrap text-generous-600">
              {course.schedule}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
