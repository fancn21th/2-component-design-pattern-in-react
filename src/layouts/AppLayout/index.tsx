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
          <SubNav ariaLabel="Comp Design Patterns">
            <SubNavHeader
              searchable
              value=""
              onClear={() => {}}
              onChange={() => {}}
              label="Comp Design Patterns"
              searchLabel="Search..."
            />
            <SubNavSections>
              <SubNavSection label="patterns" collapsable badgeLabel={"1"}>
                <SubNavLink to="/pagination">pagination</SubNavLink>
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
