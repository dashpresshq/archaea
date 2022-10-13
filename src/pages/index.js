import React from "react";
import clsx from "clsx";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { PageLayout } from "../ui-blocks/Root";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSummary } from "../components/FeaturesSummary";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro"
//           >
//             npx hadmean@latest
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <PageLayout>
      <Header />
      <HeroSection />
      <FeaturesSummary />
      {/* <ShowCase /> */}
      {/* Supported */}
      {/* Testimonials */}
      {/* <FeaturesList /> */}
    </PageLayout>
  );
}
