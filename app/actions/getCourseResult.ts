import { findCourses, validateSearchParams } from '@/actions/findCourses'

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
  page: number,
  take: number,
  searchParams: Record<string, string>
) => {
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
  if (validatedRequest === null) return { courses: [], total: 0 }

  const res = await findCourses(validatedRequest)
  return res
}
