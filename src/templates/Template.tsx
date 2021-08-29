import "./style.css";
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import { mediaQuery } from "../lib/styles/media";
import Tags from "../components/tag/Tags";
import Profile from "../components/profile/Profile";
import Navigator from "../components/navigator/Navigator";
import Utterances from "../components/utterances/Utterances";
import Toc from "../components/toc/Toc";
import SEO from "../components/common/SEO";

const StyledPost = styled.section`
  margin-bottom: 16rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const StyledBlogTemplate = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 768px;
  ${mediaQuery(767)} {
    width: 100%;
  }
`;

const StyledTime = styled.time`
  text-align: right;
  font-size: 0.9rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt, headings } = markdownRemark;
  const { previous, next } = pageContext;
  const image = getImage(frontmatter.thumbnail);
  return (
    <Layout>
      <SEO title={frontmatter.title} description={excerpt} />
      <StyledBlogTemplate>
        <Wrap>
          <h1>{frontmatter.title}</h1>
          <StyledTime>{frontmatter.date}</StyledTime>
          <Tags tags={frontmatter.tags} isPreview={false} />
          <Toc headings={headings} />
        </Wrap>
        <div>
          {frontmatter.thumbnail && (
            <GatsbyImage image={image} alt={frontmatter.thumbnail.base} />
          )}
          <StyledPost
            className="blog-post"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Profile />
        </div>
        <Navigator previous={previous} next={next} />
        <Utterances repo="merturl/blog-comments" />
      </StyledBlogTemplate>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      headings {
        id
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        description
        tags
        thumbnail {
          base
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
