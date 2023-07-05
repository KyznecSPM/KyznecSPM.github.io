import React from "react";

import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Anchor,
  Text,
  CardFooter,
  Tag,
} from "grommet";

import styled from "styled-components";

import { NAV_LINKS } from "../../constants";
import { useAdaptiveFontSize } from "../../hooks/useAdaptiveFontSize";
import { useAdaptiveSizeMap } from "../../hooks/useAdaptiveSize";
import { WindowSize } from "../../utils";

import { Section } from "./Section";

const Link = styled(Anchor)`
  z-index: 2;
`;

const TagWrapper = styled(Box)`
  & > div {
    margin-top: 16px;
    margin-right: 8px;
  }
`;

const WORK_EXPERIENCE = [
  {
    companyName: "Magellan X (SOL-X)",
    jobTitle: "Full-stack Software Engineer",
    dateStart: "11/2022",
    dateEnd: null,
    website: { link: "https://magellanx.co/", label: "magellanx.co" },
    keyValues: [
      "Developing backend services",
      "Developing database migration scripts",
      "Template development",
      "Web application development",
      "Unit and integration testing",
      "Finalizing deployment scripts",
    ],
    techStack: [
      "React",
      "Apollo GraphQL",
      "Koa",
      "Circle CI",
      "Jest",
      "React Testing Library",
      "Storybook",
      "Docker",
      "Docker Compose",
    ],
  },
  {
    companyName: "InnoTech",
    jobTitle: "Frontend Developer",
    dateStart: "03/2022",
    dateEnd: "11/2022",
    website: null,
    keyValues: [
      "Development of web-application for bank clients",
      "Unit and integration testing",
      "Code review and mentoring",
    ],
    techStack: [
      "React",
      "Redux",
      "React-Query",
      "MicroFrontend",
      "React Testing Library",
      "Storybook",
      "Atlassian",
    ],
  },
  {
    companyName: "EPAM Systems Inc.",
    jobTitle: "Software Engineer",
    dateStart: "05/2021",
    dateEnd: "03/2022",
    website: { link: "https://www.epam.com/", label: "epam.com" },
    keyValues: [
      "Development of web-application for bank clients",
      "Unit and integration testing",
      "Code review and mentoring",
    ],
    techStack: [
      "React",
      "Redux",
      "React-Query",
      "MicroFrontend",
      "React Testing Library",
      "Storybook",
      "Atlassian",
    ],
  },
  {
    companyName: "URSIP System and Projects",
    jobTitle: "Frontend Developer",
    dateStart: "11/2019",
    dateEnd: "04/2021",
    website: null,
    keyValues: [
      "SPA development",
      "Legacy projects support",
      "Finalization and support of design system",
      "Optimization of the client side of the application",
      "API design",
    ],
    techStack: [
      "React",
      "Redux",
      "Redux-Thunk",
      "Redux-Saga",
      "jquery",
      "xslt",
      "RTK",
      "Jest",
      "yarn workspaces",
      "gitlab Ci/CD",
    ],
  },
];

export const Experience = () => {
  const size = useAdaptiveFontSize();
  const width = useAdaptiveSizeMap({
    [WindowSize.small]: "100%",
    [WindowSize.medium]: "100%",
    [WindowSize.large]: "60%",
    [WindowSize.xlarge]: "80%",
  });
  return (
    <Section id={NAV_LINKS.experience} title="Experience" isDark>
      <Box width="100%">
        <Box gap="32px">
          {WORK_EXPERIENCE.map(
            (
              {
                website,
                companyName,
                jobTitle,
                dateStart,
                dateEnd,
                keyValues,
                techStack,
              },
              index
            ) => (
              <Box
                key={dateStart}
                width={{
                  min: "240px",
                  width: width,
                  max: "1200px",
                }}
                pad="small"
                alignSelf={index % 2 ? "start" : "end"}
                data-sal="zoom-in"
                data-sal-duration={1_400}
              >
                <Card pad={size} background="light-2">
                  <CardHeader
                    direction="column"
                    align="start"
                    gap="6px"
                    margin={{ bottom: "medium" }}
                  >
                    <Heading
                      level={3}
                      size={size}
                      margin={{ top: "0px", bottom: "0px" }}
                    >
                      {companyName}
                    </Heading>
                    {website && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={website.link}
                        label={website.label}
                      />
                    )}
                  </CardHeader>
                  <CardBody margin={{ bottom: "16px" }}>
                    <Box margin={{ bottom: "16px" }}>
                      <Heading
                        level={4}
                        size={size}
                        margin={{ top: "0px", bottom: "0px" }}
                      >
                        {jobTitle}
                      </Heading>
                      <Text>{`(${dateStart} - ${dateEnd || "current"})`}</Text>
                    </Box>
                    <Box>
                      {keyValues.map((text) => (
                        <Text margin={{ top: "4px" }} key={text}>
                          {"• "} {text}
                        </Text>
                      ))}
                    </Box>
                  </CardBody>
                  <CardFooter>
                    <TagWrapper direction="row" wrap>
                      {techStack.map((text) => (
                        <Tag key={text} size="small" value={text} />
                      ))}
                    </TagWrapper>
                  </CardFooter>
                </Card>
              </Box>
            )
          )}
        </Box>
      </Box>
    </Section>
  );
};
