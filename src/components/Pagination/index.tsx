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

/**
 * notion: 当前页码 从1开始
 * use cases:
 * - show 10 pages max
 * 1. 1,2,3,4,5,6,7,8,9,10
 * - when larger than 10 pages find the omit part
 * - it looks like you press hard on the line and same pages at the far away side will be squeezed out
 * 2. 1,2,3,4,(5),6,7,8,***,11
 * 3. 1,***,4,5,(6),7,8,9,10,11
 *
 */
const PaginationComponent = ({
  current = 1,
  total = 5,
  pageSize = 1,
  onPageChange = () => {
    return;
  },
}: PaginationComponentProps) => {
  const pagesCount = Math.ceil(total / pageSize);

  const HeadNTailPart = (start: number, count: number) => {
    return Array(count)
      .fill(null)
      .map((_, index) => {
        const _index = index + start;
        return (
          <PageLink
            key={start}
            number={_index}
            to={"/" + _index}
            onClick={() => {
              onPageChange(_index);
            }}
          ></PageLink>
        );
      });
  };

  const DotsPart = (show: boolean, count: number) => {
    return show ? <Dots>And {count} other links</Dots> : null;
  };

  return (
    <Pagination activePage={current - 1} pageCount={pagesCount}>
      <PreviousLink to={"" + (current - 1)}>Go to previous page</PreviousLink>

      {/* 头部 */}

      {HeadNTailPart(1, pagesCount <= 5 ? pagesCount : 1)}
      {/* {DotsPart(pagesCount > 5, 2)}
      {pagesCount > 2 && HeadNTailPart(10, 2)} */}

      <NextLink to={"" + (current + 1)}>Go to next page</NextLink>
    </Pagination>
  );
};

export default PaginationComponent;
