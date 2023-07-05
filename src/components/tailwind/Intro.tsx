import React from "react";

import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";

import cv from "../../assets/CV_Dmitrii_Emelianov.pdf";
import { GithubIcon } from "../../icons/tailwind/Github";
import { LinkedInIcon } from "../../icons/tailwind/LinkedIn";
import { TelegramIcon } from "../../icons/tailwind/Telegram";
import background from "../../images/background.webp";

const Background = styled.section`
  background-image: url(${background});
`;

const className =
  "fill-text_second stroke-text_second color-text_second inline-block";

const LINKS = [
  {
    icon: <TelegramIcon className={className} />,
    href: "https://t.me/kyznecspm",
  },
  {
    icon: <LinkedInIcon className={className} />,
    href: "https://www.linkedin.com/in/kyznec/",
  },
  {
    icon: <GithubIcon className={className} />,
    href: "https://github.com/KyznecSPM",
  },
];

export const Intro = ({
  mobileImage,
  tabletImage,
  desktopImage,
}: {
  mobileImage?: IGatsbyImageData;
  tabletImage?: IGatsbyImageData;
  desktopImage?: IGatsbyImageData;
}) => {
  return (
    <>
      <header className="absolute top-0 left-0 right-0 p-4">
        <div className="container mx-auto">
          <svg
            viewBox="0 0 55 79"
            className="fill-brand stroke-brand color-brand inline-block h-16"
          >
            <path
              fill="inherit"
              d="M4.15 48V13h15.9c3.8 0 7.15.733 10.05 2.2 2.9 1.433 5.167 3.45 6.8 6.05 1.633 2.6 2.45 5.683 2.45 9.25 0 3.533-.817 6.617-2.45 9.25-1.633 2.6-3.9 4.633-6.8 6.1C27.2 47.283 23.85 48 20.05 48H4.15Zm8.1-6.65h7.4c2.333 0 4.35-.433 6.05-1.3 1.733-.9 3.067-2.167 4-3.8.967-1.633 1.45-3.55 1.45-5.75 0-2.233-.483-4.15-1.45-5.75-.933-1.633-2.267-2.883-4-3.75-1.7-.9-3.717-1.35-6.05-1.35h-7.4v21.7Z"
            />
            <path
              fill="inherit"
              d="M32.6 45.1h16.85v6.3H32.6v-6.3Zm.6 14.4h19.05V66h-27.1V31H51.6v6.5H33.2v22Z"
            />
          </svg>
        </div>
      </header>
      <Background className="h-screen w-full bg-cover bg-center bg-no-repeat pt-24 min-w-[300px] overflow-x-auto">
        <div className="container mx-auto h-full min-w-[300px]">
          <div className="flex h-full">
            <div className="flex-1 lg:flex-initial flex flex-col justify-center p-4 items-center text-center md:text-start md:items-start">
              {mobileImage && (
                <GatsbyImage
                  alt="avatar.png"
                  image={{ ...mobileImage, height: 170 }}
                  className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden h-[170px] min-h-[170px] mb-6 rounded-full"
                  // className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden mb-6 rounded-full"
                />
              )}
              {tabletImage && (
                <GatsbyImage
                  alt="avatar.png"
                  image={{ ...tabletImage, height: 400 }}
                  className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden h-[400px] min-h-[400px] mb-6 border-b-slate-300 border-b-2"
                  // className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden mb-6 border-b-slate-300 border-b-2"
                />
              )}
              <div data-sal="slide-right">
                <h1 className="text-text_main text-4xl font-semibold mb-2 md:text-6xl lg:text-7xl xl:text-8xl">
                  Dmitrii Emelianov
                </h1>
              </div>
              <p
                className="text-text_main text-2xl font-semibold mb-6 md:text-4xl lg:text-5xl xl:text-6xl"
                data-sal="slide-right"
                data-sal-duration={1_400}
              >
                Software Developer
              </p>
              <a
                className="text-brand text-base sm:text-xl xl:text-2xl mb-10 font-bold px-4 py-1 border-2 border-brand rounded-full hover:bg-brand hover:text-text_main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text_main"
                href={cv}
              >
                DOWNLOAD CV
              </a>
              <div className="grid grid-cols-3 gap-4">
                {LINKS.map(({ icon, href }) => (
                  <a
                    key={href}
                    className="flex w-12 sm:w-14 xl:w-16 p-3 mb-4 border-2 border-brand rounded-3xl bg-brand hover:text-text_main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text_main"
                    href={href}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex relative lg:flex-1">
              {desktopImage && (
                <GatsbyImage
                  alt="avatar.png"
                  image={desktopImage}
                  className="hidden md:block min-w-[825px] absolute bottom-0 md:right-[-420px] lg:right-[-210px]"
                />
              )}
            </div>
          </div>
        </div>
      </Background>
    </>
  );
};
