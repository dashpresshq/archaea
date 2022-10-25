import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export function Intro() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Your engineering resources should be building exciting features
              not boring internal apps.
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Your database already has good information on what your internal
              tool should be doing. Stop using your engineering resources to
              build what can be auto-generated.
            </p>
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {[
                "No Javascript",
                "No SQL",
                "No tutorial",
                "No drag-and-drop",
                "No learning curve",
                "No maintenance",
              ].map((text) => (
                <li key={text} className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mb-8 font-light lg:text-xl">
              All Hadmean needs is your database credentials. <br />
              Then it will introspect your database and build for you a powerful
              internal tool to save you 1000+ hours in engineering time
            </p>
          </div>
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={`${siteConfig.baseUrl}/img/features/1.png`}
            alt="dashboard feature image"
          />
        </div>
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={`${siteConfig.baseUrl}/img/features/2.png`}
            alt="feature image 2"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Hadmean is featured packed.
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              As opposed to building from the ground up, You will be tearing
              down as Hadmean gives you too much features so you will be
              removing some of it.
            </p>
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {[
                "Roles and Permissions",
                "Dashboard Builder",
                "Form Validation",
                "Relationships",
                "Powerful Filters",
              ].map((message) => (
                <li className="flex space-x-3" key={message}>
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {message}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
