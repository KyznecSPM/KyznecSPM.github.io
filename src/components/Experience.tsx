import React from "react";

import {
  Box,
  Stack,
  Diagram,
  DiagramConnectionAnchor,
  DiagramConnectionType,
  Heading,
  Card,
  CardHeader,
  CardBody,
  DiagramProps,
  Anchor,
  Text,
} from "grommet";

import styled from "styled-components";

import { useAdaptiveFontSize } from "../hooks/useAdaptiveFontSize";

import { Section } from "./Section";

const Link = styled(Anchor)`
  z-index: 2;
`;

const anchor: DiagramConnectionAnchor = "vertical";
const type: DiagramConnectionType = "curved";
const color: string = "brand";
const thickness = "xsmall";

const DEFAULT = {
  anchor,
  color,
  thickness,
  type,
  round: true,
};

const WORK_EXPERIENCE = [
  {
    companyName: "Magellan X (SOL-X)",
    jobTitle: "Full-stack Software Engineer",
    dateStart: "11/2022",
    dateEnd: null,
    website: { link: "https://magellanx.co/", label: "magellanx.co" },
    keyValues: [
      "Developing backend services on Apollo GraphQL and Koa",
      "Migration development for PostgreSQL",
      "Custom template development for Azure AD",
      "Web application development in React (SPA, PWA)",
      "Unit and integration testing of JEST + Storybook Jest Addon",
      "Finalizing deployment scripts for Circle CI",
      "Docker and Docker Compose containerization",
    ],
  },
  {
    companyName: "InnoTech",
    jobTitle: "Frontend Developer",
    dateStart: "03/2022",
    dateEnd: "11/2022",
    website: null,
    keyValues: [
      "Development of web-application for bank clients (SPA + microfrontend)",
      "Unit and integration testing (Jest)",
      "Code review and mentoring",
    ],
  },
  {
    companyName: "EPAM Systems Inc.",
    jobTitle: "Software Engineer",
    dateStart: "05/2021",
    dateEnd: "03/2022",
    website: { link: "https://www.epam.com/", label: "epam.com" },
    keyValues: [
      "Development of web-application for bank clients (SPA + microfrontend)",
      "Unit and integration testing (Jest)",
      "Code review and mentoring",
    ],
  },
  {
    companyName: "URSIP System and Projects",
    jobTitle: "Frontend Developer",
    dateStart: "11/2019",
    dateEnd: "04/2021",
    website: null,
    keyValues: [
      "SPA development (React, Redux, Redux-Saga)",
      "Legacy projects support (xslt, jquery, html, css)",
      "Finalization and support of design system (storybook)",
      "Optimization of the client side of the application",
      "REST API design",
    ],
  },
];

type WorkExperience = typeof WORK_EXPERIENCE;

const CONNECTIONS = WORK_EXPERIENCE.reduce(
  (acc: DiagramProps["connections"], value: WorkExperience[number], index) => {
    if (acc.length === 0) {
      return [
        {
          id: index,
          toTarget: "",
          fromTarget: value.companyName,
          ...DEFAULT,
        },
      ];
    }
    if (WORK_EXPERIENCE.length === index + 1) {
      const last = acc.pop()!;
      last.toTarget = value.companyName;
      return [...acc, last];
    }
    const last = acc.pop()!;
    last.toTarget = value.companyName;

    return [
      ...acc,
      last,
      {
        id: index,
        toTarget: "",
        fromTarget: value.companyName,
        ...DEFAULT,
      },
    ];
  },
  []
);

export const Experience = () => {
  const size = useAdaptiveFontSize();
  return (
    <Section title="Experience" isDark>
      <Box width="100%">
        <Stack>
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
                },
                index
              ) => (
                <Box
                  key={companyName}
                  id={companyName}
                  width={{
                    min: "240px",
                    width: "60%",
                    max: "700px",
                  }}
                  pad="small"
                  alignSelf={index % 2 ? "start" : "end"}
                >
                  <Card pad={size} gap="medium" background="light-2">
                    <CardHeader direction="column" align="start" gap="6px">
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
                    <CardBody>
                      <Box margin={{ bottom: "16px" }}>
                        <Heading
                          level={4}
                          size={size}
                          margin={{ top: "0px", bottom: "0px" }}
                        >
                          {jobTitle}
                        </Heading>
                        <Text>{`(${dateStart} - ${
                          dateEnd || "current"
                        })`}</Text>
                      </Box>
                      <Box>
                        {keyValues.map((text) => (
                          <Text margin={{ top: "4px" }} key={text}>
                            {"• "} {text}
                          </Text>
                        ))}
                      </Box>
                    </CardBody>
                  </Card>
                </Box>
              )
            )}
          </Box>
          <Diagram connections={CONNECTIONS} />
        </Stack>
      </Box>
    </Section>
  );
};
