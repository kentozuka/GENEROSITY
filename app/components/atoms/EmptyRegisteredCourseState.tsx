import EmptyCourseBanner from '@/components/atoms/EmptyCourseBanner'

export default function EmptyRegisteredCourseState({ term }: { term: string }) {
  return (
    <div className="pb-8">
      <p className="py-4 text-xl font-bold">{term}</p>
      <EmptyCourseBanner />
    </div>
  )
}
