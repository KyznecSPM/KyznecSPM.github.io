import React, { PropsWithChildren, useContext } from "react";

import { Box, Heading, ResponsiveContext } from "grommet";

import { PageContent } from "grommet/components/PageContent";

import { WindowSize } from "../utils";

export const Section = ({
  children,
  isDark,
  title,
}: PropsWithChildren<{
  isDark?: boolean;
  title: string;
}>) => {
  const size = useContext(ResponsiveContext) as WindowSize;
  return (
    <PageContent
      pad={{ horizontal: size, bottom: "64px" }}
      width={{ min: "0px", max: "1536px", width: "100%" }}
      background={{ fill: "horizontal", color: isDark ? "dark-1" : "light-1" }}
    >
      <Box align="center">
        <Heading level={2} margin={{ top: "64px", bottom: "48px" }}>
          {title}
        </Heading>
        {children}
      </Box>
    </PageContent>
  );
};
