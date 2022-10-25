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
          className="text-primary dark:text-purple-500 hover:underline"
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
].map((faq, index) => ({ id: index, ...faq }));

export function Faq() {
  const [current, setCurrent] = useState(0);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:p-24 lg:px-6 ">
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
                        "flex items-center justify-between w-full py-5 font-medium text-left  border-b border-gray-200 dark:border-gray-700",
                        {
                          " text-gray-900 bg-white dark:bg-gray-900 dark:text-white":
                            isActive,
                          " text-gray-500  dark:bg-gray-400 ": !isActive,
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
