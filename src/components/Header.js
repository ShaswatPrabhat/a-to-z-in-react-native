import { Link } from "gatsby";
import React, { useContext } from "react";
import ThemeContext from "../themeProvider/context";

export const Header = ({ siteTitle, siteDescription }) => {
  const { themeToggle } = useContext(ThemeContext);
  return (
    <>
      <button style={{ height: 60, width: 120 }} onClick={themeToggle}>
        <text>Toggle Theme</text>
      </button>
      <Link to="/">
        <h1>{siteTitle}</h1>
        <p>{siteDescription}</p>
      </Link>
    </>
  );
};
