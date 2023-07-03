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
import { Mail } from "grommet-icons";
import styled from "styled-components";

import cv_link from "../assets/CV_Dmitrii_Emelianov.pdf";
import { useAdaptiveFontSize } from "../hooks/useAdaptiveFontSize";
import { GithubIcon } from "../icons/Github";
import { LinkedInIcon } from "../icons/LinkedIn";
import { TelegramIcon } from "../icons/Telegram";
import avatar from "../images/avatar.png";
import avatar_small from "../images/avatar_small.png";
import background from "../images/background.webp";
import { WindowSize } from "../utils";

import { Header } from "./Header";

const ImageWrapper = styled(Box)`
  position: relative;
`;

const Image = styled(LibImage)`
  position: absolute;
  bottom: 0;
  left: -320px;
`;

const FULL_NAME = "Dmitrii Emelianov";
const JOB_TITLE = "Software Developer";
const DOWNLOAD_BUTTON = "DOWNLOAD CV";

const FONT_COLOR = "rgba(237, 237, 237, 0.80)";

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

const LINKS = [
  {
    icon: <Mail />,
    href: "",
  },
  {
    icon: <TelegramIcon />,
    href: "https://t.me/kyznecspm",
  },
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/kyznec/",
  },
  {
    icon: <GithubIcon />,
    href: "https://github.com/KyznecSPM",
  },
];

const Bio = () => {
  const size = React.useContext(ResponsiveContext) as WindowSize;

  const isTablet = size === WindowSize.medium;
  const isMobile = size === WindowSize.small;
  const fontSize = useAdaptiveFontSize();
  const textAlign: TextAlignType = isTablet || isMobile ? "center" : "start";

  return (
    <>
      <Box margin={{ bottom: "38px", left: "16px" }} justify={textAlign}>
        <Box
          animation={[
            { type: "fadeIn", duration: 1_400 },
            { type: "slideRight", duration: 1_400 },
          ]}
        >
          <Heading
            level={1}
            size={fontSize}
            color={FONT_COLOR}
            textAlign={textAlign}
            margin={{ top: "0px", bottom: "8px" }}
          >
            {FULL_NAME}
          </Heading>
        </Box>
        <Box
          animation={[
            { type: "fadeIn", duration: 1_400, delay: 400 },
            { type: "slideRight", duration: 1_400, delay: 400 },
          ]}
        >
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
      </Box>
      <Box
        align={textAlign}
        animation={[{ type: "fadeIn", duration: 1_400, delay: 1400 }]}
      >
        <Box align={"center"} margin={{ left: "16px" }}>
          <Button
            label={DOWNLOAD_BUTTON}
            href={cv_link}
            target="_blank"
            rel="noopener noreferrer"
          />
        </Box>
        <Box direction="row" align="center" wrap justify="center">
          {LINKS.map(({ icon, href }) => (
            <Box
              key={href}
              round="full"
              width="fit-content"
              margin={{ top: "32px", right: "16px", left: "16px" }}
            >
              <Button
                primary
                icon={icon}
                target="_blank"
                rel="noopener noreferrer"
                href={href}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export const Intro = () => {
  const size = React.useContext(ResponsiveContext) as WindowSize;

  const isDesktop = size === WindowSize.large || size === WindowSize.xlarge;
  const isTablet = size === WindowSize.medium;
  const isMobile = size === WindowSize.small;

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
          <Box alignSelf="center">
            <Bio />
          </Box>
          <Box flex justify="end" align="center">
            <ImageWrapper animation={[{ type: "fadeIn", duration: 1_400 }]}>
              <Image src={avatar} />
            </ImageWrapper>
          </Box>
        </Box>
      ) : (
        <Box flex justify="center" pad="medium">
          {isMobile && (
            <Box align="center" margin={{ bottom: "16px" }}>
              <Avatar
                src={avatar_small}
                size="4xl"
                animation={[{ type: "fadeIn", duration: 1_400 }]}
              />
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
              animation={[{ type: "fadeIn", duration: 1_400 }]}
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
          <Bio />
        </Box>
      )}
    </PageContent>
  );
};
