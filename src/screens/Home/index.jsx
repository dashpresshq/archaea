import React from "react";
import Head from "@docusaurus/Head";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Footer } from "./Footer";
import { CallToAction } from "./CallToAction";
import { Faq } from "./Faq";
import { Testimonial } from "./Testimonial";
import { Features } from "./Features";
import { Intro } from "./Intro";
import { Hero } from "./Hero";
import { Header } from "./Header";
import "./style.css";

export function HomeScreen() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <BrowserOnly>
      <Head>
        <title>{`Hadmean - The simplest and most efficient no-code internal tool generator`}</title>
        <meta
          name="title"
          content="Hadmean - The simplest and most efficient no-code internal tool generator"
        />
        <meta name="description" content={siteConfig.tagline} />
        <meta property="og:site_name" content="Hadmean" />
        <meta
          property="og:image"
          content="https://themesberg.s3.us-east-2.amazonaws.com/public/github/landwind/og-image.png"
        />
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
        <link rel="manifest" href="/site.webmanifest" />

        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <Header />
      <Hero />
      {/* <UsedBy /> */}
      <Intro />
      <Features />
      <Testimonial />
      {/* <Pricing /> */}
      <Faq />
      <CallToAction />
      <Footer />
    </BrowserOnly>
  );
}
