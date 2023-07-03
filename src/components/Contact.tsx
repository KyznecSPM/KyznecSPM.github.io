import React from "react";

import { Box, Paragraph } from "grommet";

import { getYear } from "date-fns";

import { CopyrightIcon } from "../icons/Copyright";

import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section isDark>
      <Box align="center" direction="row">
        <CopyrightIcon />
        <Paragraph margin={{ left: "8px" }}>
          Dmitrii Emelianov {getYear(new Date())}
        </Paragraph>
      </Box>
    </Section>
  );
};
