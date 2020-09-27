import React, { useEffect, useState } from "react";
import ThemeContext from "./context";

const ThemeProvider = ({ children }) => {
  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  const [theme, setTheme] = useState(websiteTheme);

  const themeToggle = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeToggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
