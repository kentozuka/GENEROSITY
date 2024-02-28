export const paginationFactory = (
  page: number,
  max: number,
  searchParams: Record<string, string>
) => {
  const isActive = page > 0 && page <= max
  const sParams = new URLSearchParams({
    ...searchParams,
    page: page.toString()
  })
  if (!isActive) sParams.delete('page')
  const params = sParams.toString()
  const href = '/result' + (params ? `?${params}` : '')
  return { isActive, href }
}
