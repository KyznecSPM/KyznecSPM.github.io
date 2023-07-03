import React, { PropsWithChildren } from "react";

import image from "../assets/favicon.png";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export const SEO = ({ children }: PropsWithChildren) => {
  const { title, description, siteUrl } = useSiteMetadata();

  const seo = {
    title: title,
    description: description,
    image: image,
    url: siteUrl,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="shortcut icon" type="image/png" href={image} />
      {children}
    </>
  );
};
