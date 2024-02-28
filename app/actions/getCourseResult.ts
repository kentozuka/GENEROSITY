import { findCourses, validateSearchParams } from '@/actions/findCourses'
import { CompeleteCourse } from '@/types'

const stringAllowed = ['faculty', 'term']

const s2i = (str: string) => {
  const nanable = parseInt(str)
  if (isNaN(nanable)) return null
  return nanable
}

const saerchParamReducer = (sp: Record<string, string>) =>
  Object.entries(sp).reduce((ac, [key, value]) => {
    return { ...ac, [key]: s2i(value) }
  }, {})

const allowedStringParams = (sp: Record<string, string>) =>
  Object.entries(sp).reduce((ac, [key, value]) => {
    return stringAllowed.includes(key) ? { ...ac, [key]: value } : ac
  }, {})

export const getCourseResult = async (
  take: number,
  searchParams: Record<string, string>
): Promise<{
  page: number
  maxPage: number
  total: string
  courses: CompeleteCourse[]
}> => {
  const page = +searchParams.page || 1
  const skip = (page - 1) * take

  const numberSearchParams = saerchParamReducer(searchParams)
  const stringSearchParams = allowedStringParams(searchParams)
  const combo = {
    take,
    skip,
    ...numberSearchParams,
    ...stringSearchParams
  }
  const validatedRequest = await validateSearchParams(combo)
  if (validatedRequest === null)
    return { courses: [], total: '0', page, maxPage: 1 }

  const { total, courses } = await findCourses(validatedRequest)
  const maxPage = Math.ceil(total / take)
  return {
    page,
    maxPage,
    total: total.toLocaleString(),
    courses
  }
}
