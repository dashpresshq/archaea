import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";

import { Footer } from "./Footer";
import { CallToAction } from "./CallToAction";
import { Faq } from "./Faq";
import { Testimonial } from "./Testimonial";
import { Features } from "./Features";
import { Intro } from "./Intro";
import { UsedBy } from "./UsedBy";
import { Hero } from "./Hero";
import { Header } from "./Header";
import { Integrations } from "./Integrations";

import "./style.css";

const title = "Hadmean - Generate powerful admin apps with ease in seconds";

function HomeScreenImpl() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={siteConfig.tagline} />
        <meta property="og:site_name" content="Hadmean" />
        <meta property="og:title" content={title} />
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
      <Hero />
      <UsedBy />
      <Intro />
      <Features />
      <Integrations />
      <Faq />
      <Testimonial />
      {/* <Pricing /> */}
      <CallToAction />
      <Footer />
    </>
  );
}

export function HomeScreen() {
  return <BrowserOnly>{() => <HomeScreenImpl />}</BrowserOnly>;
}
