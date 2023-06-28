import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { grommet, Grommet, ThemeType } from "grommet";
import { Page } from "grommet/components/Page";
// import { PageContent } from "grommet/components/PageContent";
import { deepMerge } from "grommet/utils";

import { Promo } from "../components/Promo";

const theme: ThemeType = deepMerge(grommet, {
  global: {
    font: {
      family: "Montserrat",
    },
    breakpoints: {
      small: {
        value: 425,
      },
      medium: {
        value: 1024,
      },
      large: {
        value: 2000,
      },
      xlarge: {
        value: 2000,
      },
    },
  },
  button: {
    color: "brand",
  },
});

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Grommet full theme={theme}>
      <Page>
        <Promo />
      </Page>
    </Grommet>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
