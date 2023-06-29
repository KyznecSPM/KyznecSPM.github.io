import React from "react";

import { Box, Heading, Text as LibText, Paragraph } from "grommet";

import styled from "styled-components";

import { useAdaptiveFontSize } from "../hooks/useAdaptiveFontSize";

import { Section } from "./Section";

const ABOUT_ME = {
  TITLE: "ABOUT ME",
};
const { TITLE } = ABOUT_ME;

const TEXT =
  "Hi, my name is Dmitrii Emelianov, I am 32 years old. I started developing web applications in JS since 2018. I worked both as a single person and in a big team with more than 20 contributors. I've developed software for online banking, CRM/ERP systems and security systems. I worked with different architectural approaches such as SPA, SSR, PWA. I finalized CI/CD deployment scripts. I love technology for the opportunity to learn new things both in programming environments and business tasks. For me any interesting project and a great team is a great motivation to live.";

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

  return (
    <Section title={TITLE}>
      <Box width="100%" margin={{ bottom: "32px" }}>
        <Text size={size} color="dark-3">
          {TEXT}
        </Text>
      </Box>
      <Box direction="row" justify="between" width="100%" wrap>
        {HARD_SKILLS.map(({ title, values }) => (
          <Box
            key={title}
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
