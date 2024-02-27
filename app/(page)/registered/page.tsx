import CourseActionCard from '@/components/organisms/CourseActionCard'

export default function Registered() {
  return (
    <div className="">
      <div className="">
        <p className="font-bold text-xl py-4">春学期</p>

        <div className="grid grid-cols-3 gap-2">
          <CourseActionCard />
          <CourseActionCard />
          <CourseActionCard />
          <CourseActionCard />
          <CourseActionCard />
        </div>
      </div>

      <div className="">
        <p className="font-bold text-xl py-4">秋学期</p>

        <div className="grid grid-cols-3 gap-2">
          <CourseActionCard />
          <CourseActionCard />
          <CourseActionCard />
          <CourseActionCard />
          <CourseActionCard />
        </div>
      </div>
    </div>
  )
}
