import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Code from "./src/components/Code";
import ThemeProvider from "./src/themeProvider/provider";

const components = {
  h2: ({ children }) => <h2>{children}</h2>,
  "p.inlineCode": (props) => (
    <code style={{ backgroundColor: "lightgray" }} {...props} />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
);
