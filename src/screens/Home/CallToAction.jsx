import React from "react";
import Link from "@docusaurus/Link";

export function CallToAction() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Build your next internal tool with Hadmean
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Focus your precious engineering resources on more interesting
            things. Don't build and maintain what you can auto-generate.
          </p>
          <Link
            href="/docs/installation/setup"
            className="text-white bg-primary hover:bg-primary-dark hover:text-white focus:ring-4 focus:ring-primary-lighter font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-primary"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
