import * as React from "react";

import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { getImage, ImageDataLike } from "gatsby-plugin-image";

import { SEO } from "../components/Seo";
import { Intro } from "../components/tailwind/Intro";

type DataProps = {
  mobileImage: ImageDataLike;
  tabletImage: ImageDataLike;
  desktopImage: ImageDataLike;
};

const IndexPage = ({ data }: PageProps<DataProps>) => {
  const mobileImage = getImage(data.mobileImage);
  const tabletImage = getImage(data.tabletImage);
  const desktopImage = getImage(data.desktopImage);
  return (
    <>
      <Intro
        mobileImage={mobileImage}
        tabletImage={tabletImage}
        desktopImage={desktopImage}
      />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;

export const query = graphql`
  query MyQuery {
    mobileImage: file(relativePath: { eq: "avatar_small.png" }) {
      childImageSharp {
        gatsbyImageData(height: 170)
      }
    }
    tabletImage: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    desktopImage: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        gatsbyImageData(width: 825)
      }
    }
  }
`;
