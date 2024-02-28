import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { paginationFactory } from '@/actions/paginationFactory'

export default function IncrementalPagination({
  page,
  maxPage,
  searchParams
}: {
  page: number
  maxPage: number
  searchParams: Record<string, string>
}) {
  const previous = paginationFactory(page - 1, maxPage, searchParams)
  const next = paginationFactory(page + 1, maxPage, searchParams)

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
