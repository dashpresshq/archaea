import React from "react";
import { CallToAction } from "./CallToAction";
import { Faq } from "./Faq";
import { Testimonial } from "./Testimonial";
import { Features } from "./Features";
import { Actions } from "./Actions";
import { Intro } from "./Intro";
// import { UsedBy } from "./UsedBy";
import { Hero } from "./Hero";
import { Integrations } from "./Integrations";

import { Layout } from "../_components/Layout";

export function HomeScreen() {
  return (
    <Layout title="Generate powerful admin apps with ease in seconds">
      <Hero />
      {/* <UsedBy /> */}
      <Intro />
      <Features />
      <Integrations />
      <Actions />
      <Faq />
      <Testimonial />
      {/* <Pricing /> */}
      <CallToAction />
    </Layout>
  );
}
