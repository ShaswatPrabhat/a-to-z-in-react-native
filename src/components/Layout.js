import React from 'react';
import styled from 'styled-components'
import {useSiteMetadata} from '../hooks/useSiteMetadata';
import {Header} from './Header';
import {Meta} from "./Meta";
import {GlobalStyle} from '../styles/GlobalStyle'

const AppStyles = styled.main`
    width: 800px;
    margin: 0 auto;
`;

export const Layout = ({children}) => {
    const {title, description} = useSiteMetadata();
    return (
        <>
            <GlobalStyle/>
            <AppStyles>
                <Meta/>
                <Header siteTitle={title} siteDescription={description}/>
                {children}
            </AppStyles>
        </>
    );
};
