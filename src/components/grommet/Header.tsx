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

import { MENU_ITEMS } from "../../constants";
import { LogoIcon } from "../../icons/Logo";
import { WindowSize } from "../../utils";

const HeaderComponent = styled(LibHeaderComponent)`
  z-index: 2;
`;

export const Header = () => {
  const size = useContext(ResponsiveContext) as WindowSize;

  return (
    <HeaderComponent pad={size} height="xsmall">
      <Anchor icon={<LogoIcon size="large" />} />
      {size === WindowSize.small || size === WindowSize.medium ? (
        <Box justify="end">
          <Menu
            a11yTitle="Navigation Menu"
            dropProps={{ align: { top: "bottom", right: "right" } }}
            icon={<MenuIcon color="light-2" />}
            items={MENU_ITEMS.map(({ label, id }) => ({
              label: (
                <Box pad="small">
                  <Anchor href={`#${id}`} label={label} />
                </Box>
              ),
            }))}
          />
        </Box>
      ) : (
        <Box justify="end" direction="row" gap="medium">
          {MENU_ITEMS.length !== 0 &&
            MENU_ITEMS.map(({ label, id }) => (
              <Anchor href={`#${id}`} label={label} />
            ))}
        </Box>
      )}
    </HeaderComponent>
  );
};
