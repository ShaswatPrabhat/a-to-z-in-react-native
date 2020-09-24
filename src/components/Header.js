import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

export const Header = ({ siteTitle, siteDescription }) => {
  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  const [, setTheme] = useState(websiteTheme);

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  return (
    <>
      <button style={{ height: 60, width: 120 }} onClick={ThemeToggle}>
        <text>Toggle Theme</text>
      </button>
      <Link to="/">
        <h1>{siteTitle}</h1>
        <p>{siteDescription}</p>
      </Link>
    </>
  );
};
