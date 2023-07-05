import React from "react";

import { Box, Heading, Text } from "grommet";

import { NAV_LINKS } from "../../constants";
import { useAdaptiveFontSize } from "../../hooks/useAdaptiveFontSize";
import { useAdaptiveSizeMap } from "../../hooks/useAdaptiveSize";
import { HexletIcon } from "../../icons/Hexlet";
import { HTMLAcademyIcon } from "../../icons/HTMLAcademy";
import { MaiIcon } from "../../icons/Mai";
import { RsSchoolIcon } from "../../icons/RsSchool";
import { UdemyIcon } from "../../icons/Udemy";
import { WindowSize } from "../../utils";

import { Section } from "./Section";

const IMAGE_SIZE = {
  [WindowSize.small]: "60px",
  [WindowSize.medium]: "80px",
  [WindowSize.large]: "100px",
  [WindowSize.xlarge]: "120px",
};

const COURSE_IMAGE_SIZE = {
  [WindowSize.small]: "120px",
  [WindowSize.medium]: "160px",
  [WindowSize.large]: "200px",
  [WindowSize.xlarge]: "240px",
};

export const Education = () => {
  const width = useAdaptiveSizeMap(IMAGE_SIZE);
  const basis = useAdaptiveSizeMap(COURSE_IMAGE_SIZE);
  const fontSize = useAdaptiveFontSize();
  return (
    <Section id={NAV_LINKS.education} title="Education">
      <Box
        direction="row"
        gap="32px"
        margin={{ bottom: "64px" }}
        data-sal="slide-up"
        data-sal-duration={1_400}
      >
        <Box basis={width}>
          <MaiIcon width={width} />
        </Box>
        <Box flex>
          <Heading level={3} margin={{ top: "0px" }}>
            Engineer of integrated aircraft system
          </Heading>
          <Text size={fontSize} margin={{ top: "0px" }} color="dark-3">
            Moscow Aviation Institute (National Research University)
          </Text>
        </Box>
      </Box>
      <Box
        width="100%"
        align="center"
        data-sal="slide-up"
        data-sal-duration={1_400}
      >
        <Box margin={{ bottom: "32px" }}>
          <Heading level={3} margin={{ top: "0px", bottom: "0px" }}>
            Online courses
          </Heading>
        </Box>
        <Box direction="row" justify="center" width="100%" wrap>
          <Box
            basis={basis}
            margin={{ left: "24px", right: "24px", top: "32px" }}
          >
            <HexletIcon />
          </Box>
          <Box
            basis={basis}
            margin={{ left: "24px", right: "24px", top: "32px" }}
          >
            <RsSchoolIcon />
          </Box>
          <Box
            basis={basis}
            margin={{ left: "24px", right: "24px", top: "32px" }}
          >
            <UdemyIcon />
          </Box>
          <Box
            basis={basis}
            margin={{ left: "24px", right: "24px", top: "32px" }}
          >
            <HTMLAcademyIcon />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};
