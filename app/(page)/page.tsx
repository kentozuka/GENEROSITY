import Icon from '@/components/atoms/Icon'
import CourseCard from '@/components/organisms/CourseCard'
import db from '@/lib/db'

export default async function Home() {
  const courses = await db.course.findMany({
    where: {
      credit: {
        gt: 3
      }
    },
    include: {
      faculty: true,
      professor: true
    },
    take: 6
  })

  return (
    <>
      <div className="w-full h-24 bg-generous-500">search bar</div>

      <div className="pt-12 pb-4">
        <p className="pb-4 text-xl">
          <span className="inline-block pr-2 align-sub">
            <Icon type="flame" />
          </span>
          注目されている授業
        </p>
        <div className="flex w-full gap-2 overflow-x-scroll">
          {courses.map((course) => (
            <div className="flex-[0_0_30%]" key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
      <div className="py-4">
        <p className="pb-4 text-xl">
          <span className="inline-block pr-2 align-sub">
            <Icon type="alarmclock" />
          </span>
          遅い時間の授業
        </p>
        <div className="flex w-full gap-2 overflow-x-scroll">
          {courses.map((course) => (
            <div className="flex-[0_0_30%]" key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
