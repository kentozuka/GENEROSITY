import CourseCard from '@/components/organisms/CourseCard'
import { Button } from '@/components/ui/button'

export default function Result() {
  return (
    <div className="">
      <Button variant="secondary">戻る</Button>

      <div className="py-6">
        <p className="text-xl text-generous-600 pb-1">検索結果</p>
        <p className="text-generous-500">60件</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  )
}
