import * as React from "react";

import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { FixedObject } from "gatsby-image";

import { SEO } from "../components/Seo";
import { Intro } from "../components/tailwind/Intro";

type DataProps = {
  mobileImage: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
  tabletImage: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
};

const IndexPage = ({ data }: PageProps<DataProps>) => {
  return (
    <>
      <Intro
        mobileImage={data.mobileImage.childImageSharp.fixed}
        tabletImage={data.tabletImage.childImageSharp.fixed}
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
        fixed(height: 170, webpQuality: 100) {
          base64
          tracedSVG
          aspectRatio
          srcWebp
          srcSetWebp
          originalName
        }
      }
    }
    tabletImage: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fixed(width: 825, webpQuality: 100) {
          base64
          tracedSVG
          aspectRatio
          srcWebp
          srcSetWebp
          originalName
        }
      }
    }
  }
`;
