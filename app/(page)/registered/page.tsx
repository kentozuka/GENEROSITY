import CourseActionCard from '@/components/organisms/CourseActionCard'
import db from '@/lib/db'

const getUserCourses = async () => {
  const user = await db.user.current()
  if (user === null) return []

  const courses = await db.course.findMany({
    where: {
      users: {
        some: {
          id: user.id
        }
      }
    },
    include: {
      faculty: true,
      professor: true
    }
  })

  return courses
}

export default async function Registered() {
  const courses = await getUserCourses()

  return (
    <div className="">
      <div className="">
        <p className="py-4 text-xl font-bold">春学期</p>

        <div className="grid grid-cols-3 gap-2">
          {courses.map((course) => (
            <CourseActionCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <div className="">
        <p className="py-4 text-xl font-bold">秋学期</p>

        <div className="grid grid-cols-3 gap-2">
          {courses.map((course) => (
            <CourseActionCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}
