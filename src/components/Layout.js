import React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";
import { Meta } from "./Meta";
import { GlobalStyle } from "../styles/GlobalStyle";
import { device } from "../constants/breakpoints";

const AppStyles = styled.main`
  width: 80%;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 800px;
  }
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyle />
      <AppStyles>
        <Meta />
        <Header siteTitle={title} siteDescription={description} />
        {children}
      </AppStyles>
    </>
  );
};
