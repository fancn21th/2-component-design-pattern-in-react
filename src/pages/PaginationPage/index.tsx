import { HeaderLayout, ContentLayout, Button } from "@strapi/design-system";
import { Plus } from "@strapi/icons";

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
      <ContentLayout></ContentLayout>
    </>
  );
};

export default PaginationPage;
