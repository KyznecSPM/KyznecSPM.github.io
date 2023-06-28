import * as React from "react";
import {
  Heading,
  Button,
  Box,
  ResponsiveContext,
  Avatar,
  Card,
  CardBody,
} from "grommet";
import { PageContent } from "grommet/components/PageContent";
import styled from "styled-components";

import background from "../images/background.webp";
import avatar from "../images/avatar.png";
import avatar_small from "../images/avatar_small.png";

import { GithubIcon } from "../icons/Github";
import { TelegramIcon } from "../icons/Telegram";
import { LinkedInIcon } from "../icons/LinkedIn";

const PromoContainer = styled(Box)`
  @media only screen and (max-width: 1330px) {
    flex-direction: column;
    & > * {
      align-items: center;
      text-align: center;
      margin: 0;
      max-width: 100%;
    }
  }
`;

const PICTURE_SIZE = {
  small: "670px",
  medium: "670px",
  large: "720px",
};

const HEADING_SIZE = {
  small: "medium",
  medium: "medium",
  large: "large",
};

const TITLE = "Software Developer";
const SUB_TITLE = "Dmitrii Emelianov";
const BUTTON_DOWNLOAD_LABEL = "DOWNLOAD CV";

const FONT_COLOR = "rgba(237, 237, 237, 0.80)";

type PictureSizes = keyof typeof PICTURE_SIZE;

const CONTENT_MAX_HEIGHT = {
  small: "1024px",
  medium: "1024px",
  large: "1024px",
};

const CONTENT_MIN_HEIGHT = {
  small: "0px",
  medium: "655px",
  large: "655px",
};

export const Promo = () => {
  const size = React.useContext(ResponsiveContext) as PictureSizes;

  return (
    <PageContent
      pad={{ horizontal: "large" }}
      height={{
        max: CONTENT_MAX_HEIGHT[size],
        min: CONTENT_MIN_HEIGHT[size],
        height: "100vh",
      }}
      background={{
        fill: "horizontal",
        image: `url(${background})`,
      }}
    >
      {size === "small" ? (
        <Box height="100%" justify="center" align="center">
          <Card>
            <CardBody pad="large" align="center">
              <Box>
                <Avatar color="black" src={avatar_small} size="5xl" />
              </Box>
              <Box width={{ max: "fit-content" }}>
                <Heading
                  textAlign="center"
                  color={FONT_COLOR}
                  size={HEADING_SIZE[size]}
                  level="1"
                  margin={{ top: "48px", bottom: "22px" }}
                >
                  {SUB_TITLE}
                </Heading>
                <Heading
                  textAlign="center"
                  color={FONT_COLOR}
                  size={HEADING_SIZE[size]}
                  level="2"
                  margin={{ top: "0", bottom: "46px" }}
                >
                  {TITLE}
                </Heading>
                <Box>
                  <Button label={BUTTON_DOWNLOAD_LABEL} />
                </Box>
                <Box
                  justify="center"
                  direction="row"
                  gap="12px"
                  margin={{ top: "38px" }}
                >
                  <Button icon={<GithubIcon />} />
                  <Button icon={<TelegramIcon />} />
                  <Button icon={<LinkedInIcon />} />
                </Box>
              </Box>
            </CardBody>
          </Card>
        </Box>
      ) : (
        <Box direction="column-reverse" height="100%">
          <PromoContainer direction="row" height="100%">
            <Box justify="center" flex margin={{ right: "-65px" }}>
              <Box width={{ max: "fit-content" }}>
                <Heading
                  color={FONT_COLOR}
                  size={HEADING_SIZE[size]}
                  level="1"
                  margin={{ top: "48px", bottom: "22px" }}
                >
                  {SUB_TITLE}
                </Heading>
                <Heading
                  size={HEADING_SIZE[size]}
                  color={FONT_COLOR}
                  level="2"
                  margin={{ top: "0", bottom: "46px" }}
                >
                  {TITLE}
                </Heading>
              </Box>
              <Box width="210px">
                <Button label={BUTTON_DOWNLOAD_LABEL} />
              </Box>
              <Box direction="row" gap="12px" margin={{ top: "38px" }}>
                <Button icon={<GithubIcon />} />
                <Button icon={<TelegramIcon />} />
                <Button icon={<LinkedInIcon />} />
              </Box>
            </Box>
            <Box
              flex
              margin={{
                right: "-48px",
              }}
              width={{
                max: PICTURE_SIZE[size],
              }}
              background={{
                image: `url(${avatar})`,
                position: "center bottom",
                size: "contain",
              }}
            />
          </PromoContainer>
        </Box>
      )}
    </PageContent>
  );
};
