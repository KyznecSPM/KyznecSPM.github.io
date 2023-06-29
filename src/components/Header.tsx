import React, { useContext } from "react";

import {
  Anchor,
  Box,
  Header as LibHeaderComponent,
  Menu,
  ResponsiveContext,
} from "grommet";

import { Menu as MenuIcon } from "grommet-icons";
import styled from "styled-components";

import { LogoIcon } from "../icons/Logo";
import { WindowSize } from "../utils";

const HeaderComponent = styled(LibHeaderComponent)`
  z-index: 2;
`;

const MENU_ITEMS = [
  { label: "About me" },
  { label: "Experience" },
  { label: "Education" },
  { label: "Contact" },
];

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
            items={MENU_ITEMS.map(({ label }) => ({
              label: <Box pad="small">{label}</Box>,
            }))}
          />
        </Box>
      ) : (
        <Box justify="end" direction="row" gap="medium">
          {MENU_ITEMS.map(({ label }) => (
            <Anchor label={label} />
          ))}
        </Box>
      )}
    </HeaderComponent>
  );
};
