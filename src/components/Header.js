import { Link } from "gatsby";
import React, { useContext } from "react";
import ThemeContext from "../themeProvider/context";

export const Header = ({ siteTitle, siteDescription }) => {
  const { theme, themeToggle } = useContext(ThemeContext);
  return (
    <>
      <button
        style={{
          height: 60,
          width: 60,
          backgroundColor: "transparent",
          border: "none",
        }}
        onClick={(event) => {
            console.warn(event);
          themeToggle();
        }}
      >
        <img
          src={
            theme === "dark"
              ? require("../assets/sun-regular.svg")
              : require("../assets/moon-solid.svg")
          }
          alt="Change theme"
          style={{
            marginBottom: -20,
            backgroundColor: "white",
          }}
        />
      </button>
      <Link to="/">
        <h1>{siteTitle}</h1>
        <p>{siteDescription}</p>
      </Link>
    </>
  );
};
