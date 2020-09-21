import React from 'react';
import {useSiteMetadata} from '../hooks/useSiteMetadata';
import styled from 'styled-components';
import {Header} from './Header';
import {Meta} from "./Meta";

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

export const Layout = ({children}) => {
    const {title, description} = useSiteMetadata();
    return (
        <AppStyles>
            <Meta/>
            <Header siteTitle={title} siteDescription={description}/>
            {children}
        </AppStyles>
    );
};
