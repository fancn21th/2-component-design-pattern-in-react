import {
  Layout,
  SubNav,
  SubNavHeader,
  SubNavSections,
  SubNavSection,
  SubNavLink,
} from "@strapi/design-system";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PaginationPage from "@/pages/PaginationPage";

export type AppLayoutProps = {};

const AppLayout = (props: AppLayoutProps) => {
  return (
    <BrowserRouter>
      <Layout
        sideNav={
          <SubNav ariaLabel="Builder sub nav">
            <SubNavHeader
              searchable
              value=""
              onClear={() => {}}
              onChange={() => {}}
              label="Builder"
              searchLabel="Search..."
            />
            <SubNavSections>
              <SubNavSection
                label="Collection Type"
                collapsable
                badgeLabel={"12"}
              >
                <SubNavLink to="/pagination">hi</SubNavLink>
              </SubNavSection>
            </SubNavSections>
          </SubNav>
        }
      >
        {/* Routes of Router */}
        <Switch>
          <Route path="/pagination" component={PaginationPage} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default AppLayout;
