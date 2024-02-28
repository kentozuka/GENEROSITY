import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

const factory = (page: number, max: number, searchParams: any) => {
  const isActive = page > 0 && page <= max
  const sParams = new URLSearchParams({
    ...searchParams,
    page
  })
  if (!isActive) sParams.delete('page')
  const params = sParams.toString()
  const href = '/result' + (params ? `?${params}` : '')
  return { isActive, href }
}

export default function IncrementalPagination({
  page,
  maxPage,
  searchParams
}: {
  page: number
  maxPage: number
  searchParams: any
}) {
  const previous = factory(page - 1, maxPage, searchParams)
  const next = factory(page + 1, maxPage, searchParams)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            isActive={previous.isActive}
            href={previous.href}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext isActive={next.isActive} href={next.href} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
