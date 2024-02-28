import CourseCard from '@/components/molecures/CourseCard'
import Icon, { IconType } from '@/components/atoms/Icon'
import { CompeleteCourse } from '@/types'

export default async function CourseHighlight({
  icon,
  title,
  courses
}: {
  icon: IconType
  title: string
  courses: CompeleteCourse[]
}) {
  return (
    <div className="py-4">
      <p className="pb-4 text-xl">
        <span className="inline-block pr-2 align-sub">
          <Icon type={icon} />
        </span>
        {title}
      </p>
      <div className="flex flex-wrap w-full gap-2 pb-4 overflow-visible md:flex-nowrap md:overflow-x-scroll">
        {courses.map((course) => (
          <div className="md:flex-[0_0_30%]" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  )
}
