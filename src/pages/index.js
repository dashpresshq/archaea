import React from "react";
import Link from "@docusaurus/Link";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import { HomeScreen } from "../screens/Home";

function HomepageHeader() {
  return (
    <Link className="button button--secondary button--lg" to="/docs/intro">
      npx hadmean@latest
    </Link>
  );
}

export default function Home() {
  return <HomeScreen />;
}
