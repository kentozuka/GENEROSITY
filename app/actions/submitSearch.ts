'use server'

import { redirect } from 'next/navigation'

export const submitSearch = async (formData: FormData) => {
  const faculty = formData.get('faculty')
  const term = formData.get('term')
  const weekday = formData.get('weekday')
  const period = formData.get('period')
  const query = new URLSearchParams()
  if (faculty) query.set('faculty', faculty as string)
  if (term) query.set('term', term as string)
  if (weekday) query.set('weekday', weekday as string)
  if (period) query.set('period', period as string)
  const queries = query.toString()
  redirect('/result?' + queries)
}
