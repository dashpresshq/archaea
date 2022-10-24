import Link from "@docusaurus/Link";
import React from "react";

export function Faq() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h3 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>Is Hadmean secure?</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-1"
              className=""
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  All credentials provided in the application are encrypted at
                  rest using aes-256-gcm. You can find more details about our
                  security implemetations{" "}
                  <Link
                    href="/docs/security"
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    here
                  </Link>{" "}
                </p>
              </div>
            </div>
            <h3 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <span>Can I manage my database schema with Hadmean</span>
                <svg
                  data-accordion-icon=""
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-2"
              className="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  No, Hadmean is not intended for such use and will not and will
                  never have an interface to change the structure of your
                  database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
