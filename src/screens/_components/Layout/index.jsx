import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Footer } from "./Footer";
import { Header } from "./Header";

import "./style.css";

function LayoutImpl({ children, title }) {
  const { siteConfig } = useDocusaurusContext();

  const pageTitle = `Hadmean - ${title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={siteConfig.tagline} />
        <meta property="og:site_name" content="Hadmean" />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:image"
          content="https://hadmean.com/img/og-image.png"
        />
        <meta property="og:description" content={siteConfig.tagline} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@hadmeanHQ" />
        <meta name="twitter:creator" content="@hadmeanHQ" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
}

export function Layout({ children, title }) {
  return (
    <BrowserOnly>
      {() => <LayoutImpl title={title}>{children}</LayoutImpl>}
    </BrowserOnly>
  );
}
