import {
  HeaderLayout,
  ContentLayout,
  Button,
  Box,
  Flex,
} from "@strapi/design-system";
import { Plus } from "@strapi/icons";
import Pagination from "@/components/Pagination";

export type PaginationPageProps = {};

const PaginationPage = (props: PaginationPageProps) => {
  return (
    <>
      <HeaderLayout
        primaryAction={<Button startIcon={<Plus />}>收藏</Button>}
        title="pagination"
        subtitle="A pagination component for navigating through pages."
        as="h2"
      />
      <ContentLayout>
        <Pagination current={2}></Pagination>
      </ContentLayout>
    </>
  );
};

export default PaginationPage;
