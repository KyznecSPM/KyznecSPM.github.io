import * as React from "react";

import { Grommet } from "grommet";

import type { HeadFC, PageProps } from "gatsby";
import { Page } from "grommet/components/Page";

import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Intro } from "../components/Intro";
import { theme } from "../theme";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Grommet full theme={theme}>
      <Page kind="wide">
        <Intro />
        <AboutMe />
        <Experience />
        <Education />
        <Contact />
      </Page>
    </Grommet>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
