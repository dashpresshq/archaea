import Link from "@docusaurus/Link";
import clsx from "clsx";
import React, { useState } from "react";

const FAQS = [
  {
    question: "Is Hadmean secure?",
    answer: (
      <>
        All credentials provided in the application are encrypted at rest using
        aes-256-gcm. You can find more details about our security implemetations{" "}
        <Link
          href="/docs/security"
          className="text-primary dark:text-primary-light hover:underline"
        >
          here
        </Link>
      </>
    ),
  },
  {
    question: "Can I manage my database schema with Hadmean",
    answer: `No, Hadmean is not intended for such use and will not and will
    never have an interface to change the structure of your
    database.`,
  },
  {
    question: "Do I need coding knowledge to use this Hadmean?",
    answer:
      "No, You can use Hadmean without any coding knowledge but having some Javascript knowledge will help you get more customization for your forms and some SQL knowledge will be beneficial when creating dashboard widgets.",
  },
  {
    question: "Is there a free trial",
    answer:
      "No, as we have a free version that is freely available, the PRO plugins are paid but you see it in action on the demo site.",
  },
  {
    question: "What are plugins",
    answer: `Plugins are a way to extend the functionality of Hadmean. You can find more information about plugins in our documentation.`,
  },
  {
    question: "How is the price determined?",
    answer:
      "Hadmean is basically free but when you need to supercharge your app with plugins, you can buy them from the marketplace. The plugins are priced individually and you can buy them as you need them.",
  },
  {
    question: "What happens if I stop paying?",
    answer:
      "When your plugin licenses expires you will have to run `npx hadmean` to continue using the free version of Hadmean. You will still be able to access your data and use the free plugins.",
  },
  {
    question: "Does my app need to be connected to verify the license",
    answer:
      "No, all the license verification is done on the app and your app will not need to be connected to the internet to verify.",
  },
  {
    question: "Can I use my license on another domain",
    answer:
      "Sadly No, since the license verification is done locally and they is no way to invalidate any license unless it expires, this means all license are tried to a specific domain.",
  },
].map((faq, index) => ({ id: index, ...faq }));

export function Faq() {
  const [current, setCurrent] = useState(0);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:p-12 lg:px-6 ">
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
            {FAQS.map(({ question, answer, id }) => {
              const isActive = id === current;
              return (
                <React.Fragment key={id}>
                  <h3 id={`accordion-flush-heading-${id}`}>
                    <button
                      type="button"
                      className={clsx(
                        "flex items-center justify-between w-full py-5 dark:text-white font-medium text-left  border-b border-gray-200 dark:border-gray-700",
                        {
                          " text-gray-900 ": isActive,
                          " text-gray-500 ": !isActive,
                        }
                      )}
                      data-accordion-target={`#accordion-flush-body-${id}`}
                      aria-expanded={isActive ? "true" : "false"}
                      aria-controls={`accordion-flush-body-${id}`}
                      onClick={() => setCurrent(isActive ? -1 : id)}
                    >
                      <span>{question}</span>
                      <svg
                        data-accordion-icon=""
                        className={clsx("w-6 h-6 shrink-0", {
                          "rotate-180": isActive,
                        })}
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
                    id={`accordion-flush-body-${id}`}
                    className={isActive ? "" : "hidden"}
                    aria-labelledby={`accordion-flush-heading-${id}`}
                  >
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {answer}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
