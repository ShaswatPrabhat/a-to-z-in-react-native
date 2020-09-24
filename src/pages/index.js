import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

export default ({ data }) => {
  return (
    <>
      <Layout>
        <IndexWrapper>
          {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
            <PostWrapper key={id}>
              <Link to={frontmatter.published ? fields.slug : "/"}>
                <h1>{`${frontmatter.title[0]}-${frontmatter.title}`}</h1>
              </Link>
            </PostWrapper>
          ))}
        </IndexWrapper>
      </Layout>
    </>
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
