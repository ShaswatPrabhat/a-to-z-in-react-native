import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { device } from "../constants/breakpoints";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

export default ({ data }) => {
  const TopicHeader = styled.h2`
    @media ${device.mobileL} {
      font-size: 20px;
    }
    @media ${device.laptop} {
      font-size: 32px;
    }
  `;

  return (
    <Layout>
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={frontmatter.published ? fields.slug : "/"}>
              <TopicHeader>{`${frontmatter.title[0]}-${frontmatter.title}`}</TopicHeader>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
      nodes {
        id
        frontmatter {
          title
          published
        }
        fields {
          slug
        }
      }
    }
  }
`;
