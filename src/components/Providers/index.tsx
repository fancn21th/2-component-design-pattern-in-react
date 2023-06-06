import React from "react";
import { ThemeProvider, lightTheme } from "@strapi/design-system";

export type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default Providers;
