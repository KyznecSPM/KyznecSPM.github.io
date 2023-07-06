import { Grommet } from "grommet";

import { Page } from "grommet/components/Page";

import { AboutMe } from "./components/grommet/AboutMe";
import { Contact } from "./components/grommet/Contact";
import { Education } from "./components/grommet/Education";
import { Experience } from "./components/grommet/Experience";
import { Intro } from "./components/grommet/Intro";
import { theme } from "./theme";

const App = () => {
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

export default App;
