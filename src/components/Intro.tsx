import * as React from "react";
import {
  Heading,
  Button,
  Box,
  ResponsiveContext,
  Avatar,
  Image as LibImage,
} from "grommet";
import { PageContent } from "grommet/components/PageContent";
import { TextAlignType, HeightType } from "grommet/utils";
import styled from "styled-components";

import background from "../images/background.webp";
import avatar from "../images/avatar.png";
import avatar_small from "../images/avatar_small.png";

import { LinkedInIcon } from "../icons/LinkedIn";
import { Header } from "./Header";
import { TelegramIcon } from "../icons/Telegram";
import { GithubIcon } from "../icons/Github";

const ImageWrapper = styled(Box)`
  position: relative;
`;

const Image = styled(LibImage)`
  position: absolute;
  bottom: 0;
  left: -320px;
`;

enum WindowSize {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

const FULL_NAME = "Dmitrii Emelianov";
const JOB_TITLE = "Software Developer";
const DOWNLOAD_BUTTON = "DOWNLOAD CV";

const FONT_COLOR = "rgba(237, 237, 237, 0.80)";

const FONT_SIZE = {
  [WindowSize.small]: "medium",
  [WindowSize.medium]: "medium",
  [WindowSize.large]: "large",
  [WindowSize.xlarge]: "xlarge",
};

type Height = {
  [key in WindowSize]: HeightType;
};

const HEIGHT: Height = {
  [WindowSize.small]: {
    min: "500px",
    max: "1280px",
    height: "100vh",
  },
  [WindowSize.medium]: {
    min: "830px",
    max: "1280px",
    height: "100vh",
  },
  [WindowSize.large]: {
    min: "500px",
    max: "1280px",
    height: "100vh",
  },
  [WindowSize.xlarge]: {
    min: "500px",
    max: "1270px",
    height: "100vh",
  },
};

export const Intro = () => {
  const size = React.useContext(ResponsiveContext) as WindowSize;
  const fontSize = FONT_SIZE[size];

  const isDesktop = size === WindowSize.large || size === WindowSize.xlarge;
  const isTablet = size === WindowSize.medium;
  const isMobile = size === WindowSize.small;

  const textAlign: TextAlignType = isTablet || isMobile ? "center" : "start";

  const BIO = (
    <>
      <Box margin={{ bottom: "38px" }} justify={textAlign}>
        <Heading
          level={1}
          size={fontSize}
          color={FONT_COLOR}
          textAlign={textAlign}
          margin={{ top: "0px", bottom: "8px" }}
        >
          {FULL_NAME}
        </Heading>
        <Heading
          level={2}
          size={fontSize}
          color={FONT_COLOR}
          textAlign={textAlign}
          margin={{ top: "0px", bottom: "0px" }}
        >
          {JOB_TITLE}
        </Heading>
      </Box>
      <Box gap="32px" align={textAlign}>
        <Box align={"center"}>
          <Button label={DOWNLOAD_BUTTON} />
        </Box>
        <Box direction="row" align="center" gap="32px">
          <Box round="full" width="fit-content">
            <Button primary icon={<LinkedInIcon />} />
          </Box>
          <Box round="full" width="fit-content">
            <Button primary icon={<TelegramIcon />} />
          </Box>
          <Box round="full" width="fit-content">
            <Button primary icon={<GithubIcon />} />
          </Box>
        </Box>
      </Box>
    </>
  );

  return (
    <PageContent
      width={{ min: "0px", max: "1720px" }}
      pad={{ horizontal: size }}
      height={HEIGHT[size]}
      background={{
        fill: "horizontal",
        image: `url(${background})`,
      }}
    >
      <Header />
      {isDesktop ? (
        <Box direction="row" height="100%">
          <Box alignSelf="center">{BIO}</Box>
          <Box flex justify="end">
            <ImageWrapper>
              <Image src={avatar} />
            </ImageWrapper>
          </Box>
        </Box>
      ) : (
        <Box flex justify="center" pad="medium">
          {isMobile && (
            <Box align="center" margin={{ bottom: "16px" }}>
              <Avatar src={avatar_small} size="4xl" />
            </Box>
          )}
          {isTablet && (
            <Box
              flex="grow"
              basis="400px"
              align="center"
              alignSelf="center"
              margin={{ bottom: "16px" }}
              width="100%"
              background={{
                image: `url(${avatar})`,
                size: "contain",
                position: "center bottom",
              }}
              border={{
                side: "bottom",
                size: "1px",
                style: "solid",
                color: "light-3",
              }}
            />
          )}

          {BIO}
        </Box>
      )}
    </PageContent>
  );
};
