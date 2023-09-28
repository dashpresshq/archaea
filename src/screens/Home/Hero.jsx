import React from "react";
import Link from "@docusaurus/Link";
import { SITE_LINKS } from "../../constants";

export function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Generate admin apps with ease in seconds
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <span className="text-lg font-medium text-primary dark:text-primary-light">
              Save <b>1000+</b> engineering hours{" "}
            </span>
            generating your internal tools rather than building and maintaining
            them with your precious engineering resources.
            <br />
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link
              to="/docs/installation/setup"
              className="inline-flex text-white items-center justify-center bg-primary hover:bg-primary-dark hover:text-white w-full px-5 py-3 text-sm font-medium text-center border border-gray-200 rounded-lg sm:w-auto focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:focus:ring-gray-800"
            >
              $ npx hadmean
            </Link>
            <Link
              target="_blank"
              href={SITE_LINKS.DEMO}
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-white-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-white dark:focus:ring-gray-800"
            >
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              Live Demo
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex overflow-hidden">
          <img
            src={`/img/hero.png`}
            alt="hero image"
            className="mb-[-7%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div class="relative" aria-hidden="true">
            <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
