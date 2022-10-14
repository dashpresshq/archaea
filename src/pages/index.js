import React from "react";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { PageLayout } from "../ui-blocks/Root";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSummary } from "../components/FeaturesSummary";
import { ShowCase } from "../components/ShowCase";
import { Supported } from "../components/Supported";
import { Final } from "../components/Final";

//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro"
//           >
//             npx hadmean@latest
//           </Link>
//

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <PageLayout>
      <Header />
      <HeroSection />
      <FeaturesSummary />
      <ShowCase />
      {/* <FeaturesList /> */}
      <Supported />
      {/* Testimonials */}
      <Final />
      {/* Footer */}
    </PageLayout>
  );
}
