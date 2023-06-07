import {
  Pagination,
  PreviousLink,
  PageLink,
  Dots,
  NextLink,
} from "@strapi/design-system";

export type PaginationComponentProps = {
  current: number;
  total: number;
  pageSize: number;
  onPageChange: (current: number) => void;
};

const MaxPaginationSize = 10;
const CurrentPageNeighbourSize = 5;

/**
 * Rules:
 *  1. 当前页码 从1开始
 *
 * Design Principles:
 *  1. Separation from UI to States
 *    1.1  no more than 10 links
 *    1.2  bigger than 10 links
 *        1.2.1 generate current page group ( including current and its neighbors )
 *        1.2.2 fill the rest
 *          1.2.2.1  current page group at the beginning
 *          1.2.2.2  current page group at the end
 *          1.2.2.3  current page group in the middle
 *
 *  2. States Overlapping
 *
 *
 */
const PaginationComponent = ({
  current = 1,
  total = 5,
  pageSize = 1,
}: PaginationComponentProps) => {
  const pagesCount = Math.ceil(total / pageSize);

  const renderPagination = (items: (string | number)[]): React.ReactNode => {
    return items.map((item) => {
      return item !== "*" ? (
        <PageLink key={item} number={item} to={"/" + item}></PageLink>
      ) : (
        <Dots>Other links</Dots>
      );
    });
  };

  const generatePaginationState = (
    current: number,
    pagesCount: number
  ): (string | number)[] => {
    const states = [1];

    return states;
  };

  return (
    <Pagination activePage={current - 1} pageCount={pagesCount}>
      <PreviousLink to={"" + (current - 1)}>Go to previous page</PreviousLink>
      {renderPagination([1, 2, 3, "*", 5, 6])}
      <NextLink to={"" + (current + 1)}>Go to next page</NextLink>
    </Pagination>
  );
};

export default PaginationComponent;
