import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

export default function PaginationSection({
  totalItems,
  itemsPerPage,
  currentPage,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}) {
  const pageNumbers = [];
  const router = useRouter();

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxPageNumberToShow = 5;
  const pageNumberLimit = Math.floor(maxPageNumberToShow / 2);

  let activePage = pageNumbers.slice(
    Math.max(0, currentPage - 1 - pageNumberLimit),
    Math.min(currentPage - 1 + pageNumberLimit + 1, pageNumbers.length)
  );

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          page: currentPage + 1,
        },
      });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          page: currentPage - 1,
        },
      });
    }
  };

  const handleCurrentPage = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: page,
      },
    });
  };

  const renderPage = () => {
    const renderPageNumbers = activePage.map((page, index) => (
      <PaginationItem
        key={index}
        className={twMerge(
          "rounded-md cursor-pointer",
          currentPage == page ? "bg-gray-300" : ""
        )}
      >
        <PaginationLink
          onClick={() => handleCurrentPage(page)}
          className="lg:hover:bg-gray-200"
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    ));

    if (activePage[0] > 1) {
      renderPageNumbers.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => handleCurrentPage(activePage[0] - 1)}
        />
      );
    }

    if (activePage[activePage.length - 1] < pageNumbers.length) {
      renderPageNumbers.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            handleCurrentPage(activePage[activePage.length - 1] + 1)
          }
        />
      );
    }

    return renderPageNumbers;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer lg:hover:bg-gray-200"
            onClick={handlePreviousPage}
          />
        </PaginationItem>
        {renderPage()}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer lg:hover:bg-gray-200"
            onClick={handleNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
