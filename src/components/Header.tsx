import React, { useContext } from "react";

import {
  Anchor,
  Box,
  Header as HeaderComponent,
  Menu,
  ResponsiveContext,
} from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { LogoIcon } from "../icons/Logo";

enum WindowSize {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

export const Header = () => {
  const size = useContext(ResponsiveContext) as WindowSize;

  return (
    <HeaderComponent pad="medium" height="xsmall">
      <Anchor icon={<LogoIcon size="large" />} />
      {size === WindowSize.small || size === WindowSize.medium ? (
        <Box justify="end">
          <Menu
            a11yTitle="Navigation Menu"
            dropProps={{ align: { top: "bottom", right: "right" } }}
            icon={<MenuIcon color="light-2" />}
            items={[
              {
                label: <Box pad="small">About Me</Box>,
              },
              {
                label: <Box pad="small">Experience</Box>,
              },
            ]}
          />
        </Box>
      ) : (
        <Box justify="end" direction="row" gap="medium">
          <Anchor label="Grommet.io" />
          <Anchor label="Feedback" />
        </Box>
      )}
    </HeaderComponent>
  );
};
