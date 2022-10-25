export const useSchemeMode = () => {
  return window && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
