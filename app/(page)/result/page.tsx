'use client'

import CourseCard from '@/components/organisms/CourseCard'
import { Button } from '@/components/ui/button'
import { CompeleteCourse } from '@/types'
import { useEffect, useState } from 'react'

export default function Result() {
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState(0)
  const [courses, setCourses] = useState<CompeleteCourse[]>([])

  const getCourse = async () => {
    const res = await fetch('/api/course', {
      method: 'POST',
      body: JSON.stringify({
        take: 20,
        skip
      })
    })
    const data = await res.json()
    return data
  }

  const fetchCourse = async () => {
    const response = await getCourse()
    setCourses(response.result)
    setTotal(response.total)
  }

  useEffect(() => {
    fetchCourse()
  }, [])

  return (
    <div className="">
      <Button variant="secondary">戻る</Button>

      <div className="py-6">
        <p className="pb-1 text-xl text-generous-600">検索結果</p>
        <p className="text-generous-500">{total.toLocaleString()}件</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
