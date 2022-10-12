import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { ReactNode } from "react";
import React from "react";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box
}

${normalize()}

html {
  font-family: "Inter", sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
  min-height: 100%
}

body {
  margin: 0;
  color: #212529;
  background-color: #fff;
  min-height: 100vh;
  letter-spacing: 0.1px;
  line-height: 1.5;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 400
}

a {
  font-family: "Inter", sans-serif;
  text-decoration: none;
  background-color: transparent
}

a:hover {
}


button {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  overflow: visible;
  border-radius: 0;
  text-transform: none;
  -webkit-appearance: button
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color
}

button::-moz-focus-inner {
  padding: 0;
  border-style: none
}

* {
  outline: none !important
}

@media (max-width: 1024px) {
  body {
      display: block !important
  }
}

@media print {

  *,
  *::before,
  *::after {
      text-shadow: none !important;
      box-shadow: none !important
  }

  a:not(.btn) {
      text-decoration: underline
  }

  img {
      page-break-inside: avoid
  }

  p {
      orphans: 3;
      widows: 3
  }

  @page {
      size: a3
  }

  body {
      min-width: 992px !important
  }
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;

}
button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
  cursor: pointer;
}

`;

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
