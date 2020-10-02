import { Link } from "gatsby";
import React, { useContext } from "react";
import ThemeContext from "../themeProvider/context";
import { Sun, Moon } from "@icon-park/react";

export const Header = ({ siteTitle, siteDescription }) => {
  const { theme, themeToggle } = useContext(ThemeContext);

  const onClick = (event) => {
    console.log(event);
    themeToggle();
  };

  return (
    <>
      {theme === "dark" ? (
        <Sun
          theme="filled"
          style={{ color: "white", marginLeft: "90%" }}
          size={40}
          onClick={onClick}
        />
      ) : (
        <Moon onClick={onClick} size="40" style={{ marginLeft: "90%" }} />
      )}
      <Link to="/">
        <h1 style={{ marginTop: 30 }}>{siteTitle}</h1>
      </Link>
      <p>{siteDescription}</p>
    </>
  );
};
