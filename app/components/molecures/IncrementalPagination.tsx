import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { usePaginationFactory } from '@/hooks/usePaginationFactory'

export default function IncrementalPagination({
  page,
  maxPage,
  searchParams
}: {
  page: number
  maxPage: number
  searchParams: Record<string, string>
}) {
  const previous = usePaginationFactory(page - 1, maxPage, searchParams)
  const next = usePaginationFactory(page + 1, maxPage, searchParams)

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
