import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Layout } from "../components/Layout";
// import Dump from "../components/Dump";

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      {/*<Dump previous={previous}/>*/}
      {/*<Dump next={next}/>*/}
      <h1
        style={{
          color: "#5304ac",
        }}
      >
        {frontmatter.title}
      </h1>
      <MDXRenderer>{body}</MDXRenderer>
      <>
        {previous && previous?.frontmatter?.published && (
          <Link to={previous.fields.slug}>
            <p>{`Previous - ${previous.frontmatter.title}`}</p>
          </Link>
        )}
      </>
      <>
        {next && next?.frontmatter?.published && (
          <Link to={next.fields.slug}>
            <p>{`Next - ${next.frontmatter.title}`}</p>
          </Link>
        )}
      </>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
