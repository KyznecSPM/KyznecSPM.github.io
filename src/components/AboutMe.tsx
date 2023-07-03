import React from "react";

import { Box, Heading, Text as LibText, Paragraph } from "grommet";

import styled from "styled-components";

import { NAV_LINKS } from "../constants";
import { useAdaptiveFontSize } from "../hooks/useAdaptiveFontSize";
import { useAdaptiveSizeMap } from "../hooks/useAdaptiveSize";
import { WindowSize } from "../utils";

import { Section } from "./Section";

const ABOUT_ME = {
  TITLE: "ABOUT ME",
};
const { TITLE } = ABOUT_ME;

const TEXT =
  "Hello, my name is Dmitrii Emelianov, I am 33 years old. I have been developing web applications since 2018. I worked both as a single developer and in a big team with more than 20 co-authors. I have developed frontend and backend software for online banking, CRM/ERP systems and security systems. I worked with different architectural approaches such as SPA, SSR, PWA. I have refined CI/CD deployment scripts. I love technology for the opportunity to learn new things in both programming environments and business tasks. A great motivation for me is an interesting project and a great team.";

const Text = styled(LibText)`
  text-indent: 1.5em;
`;

const HARD_SKILLS = [
  {
    title: "Languages",
    values: ["Javascript", "Typescript"],
  },
  {
    title: "Libraries",
    values: ["React", "Angular", "Next", "Gatsby", "Nest", "Apollo GraphQL"],
  },
  {
    title: "Devops",
    values: [
      "GitHub Actions",
      "GitLab CI/CD",
      "Docker & Docker Compose",
      "Kubernetes",
      "Webpack",
    ],
  },
  {
    title: "Cloud",
    values: ["AWS", "GCP"],
  },
];

export const AboutMe = () => {
  const size = useAdaptiveFontSize();
  const fontSize = useAdaptiveSizeMap({
    [WindowSize.small]: "medium",
    [WindowSize.medium]: "xlarge",
    [WindowSize.large]: "xlarge",
    [WindowSize.xlarge]: "3xl",
  });
  const multiplier = useAdaptiveSizeMap({
    [WindowSize.small]: 0,
    [WindowSize.medium]: 0,
    [WindowSize.large]: 200,
    [WindowSize.xlarge]: 200,
  });

  return (
    <Section id={NAV_LINKS.about_me} title={TITLE}>
      <Box
        pad={{ horizontal: size }}
        width="100%"
        margin={{ bottom: "32px" }}
        data-sal="slide-up"
        data-sal-duration={1_400}
      >
        <Text size={fontSize} color="dark-3">
          {TEXT}
        </Text>
      </Box>
      <Box direction="row" justify="between" width="100%" wrap>
        {HARD_SKILLS.map(({ title, values }, index) => (
          <Box
            key={title}
            data-sal="slide-right"
            data-sal-duration={1_400}
            data-sal-delay={(index + 1) * multiplier}
            width="195px"
            margin={{ left: "16px", right: "16px" }}
          >
            <Heading as="h3" level={2}>
              {title}
            </Heading>
            {values.map((text) => (
              <Paragraph margin={{ vertical: "12px" }} size={size} key={text}>
                {text}
              </Paragraph>
            ))}
          </Box>
        ))}
      </Box>
    </Section>
  );
};
