import React from 'react';
import {useSiteMetadata} from '../hooks/useSiteMetadata';
import styled from 'styled-components';
import {Header} from './Header';
import {Helmet} from "react-helmet";

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

export const Layout = ({children}) => {
    const {title, description} = useSiteMetadata();
    return (
        <AppStyles>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="author" content="Shaswat Prabhat, Nikhil Ribeiro and Aditya Saxena"/>
                <meta name="description"
                      content="An a to z in react-native, topic, code nuggets and challenges in react-native development"/>
                <title>A to Z in react-native</title>
            </Helmet>
            <Header siteTitle={title} siteDescription={description}/>
            {children}
        </AppStyles>
    );
};
