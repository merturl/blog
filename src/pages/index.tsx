import React, { useMemo } from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import Tags from "../components/tag/Tags";
import Profile from "../components/profile/Profile";
import PreviewList from "../components/preview/PreviewList";
import { TagProvider } from "../components/tag/TagContext";
import styled from "styled-components";
import SEO from "../components/common/SEO";

type DataProps = {
  site: {
    buildTime: string;
    siteMetadata: any;
  };
  allMarkdownRemark: {
    group: any;
    nodes: {
      excerpt: any;
      fields: any;
      frontmatter: {
        date: any;
        title: any;
        description: any;
        thumbnail: any | null;
        tags: string[];
      };
    }[];
  };
};

const Devideline = styled.div`
  align-items: center;
  border-top: 1px solid rgba(219, 219, 219, 1);
  color: #8e8e8e;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;
`;

const BlogIndex: React.FC<PageProps<DataProps>> = ({
  data,
  location,
  pageContext,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  if (posts.length === 0) {
    return (
      <Layout>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  const tags = useMemo(() => {
    return data.allMarkdownRemark.group.map(({ tag }) => tag);
  }, []);

  return (
    <Layout>
      <SEO title={"Home"} />
      <Profile />
      <TagProvider>
        <Devideline />
        <Tags tags={["all", ...tags]} isPreview={true} />
        <Devideline />
        <PreviewList posts={posts} />
      </TagProvider>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
      nodes {
        excerpt(pruneLength: 280)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
