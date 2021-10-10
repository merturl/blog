import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { mediaQuery } from "../../lib/styles/media";
import Content from "./Content";

type DataProps = {
  post: any;
};

const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const StyeldPreview = styled.div`
  width: 17rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px 0 rgb(0 0 0 / 40%);

  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  ${mediaQuery(1056)} {
    width: calc(50% - 2rem);
  }
  ${mediaQuery(767)} {
    width: 100%;
    margin: 0 0 1rem 0;
  }

  &:hover {
    transition: 0.125s all ease-in;
    transform: scale(1.05);
  }
`;

const Preview = ({ post }: DataProps) => {
  const title: string = post.frontmatter.title || post.fields.slug;
  const slug: string = post.fields.slug;
  const __html: string = post.frontmatter.description || post.excerpt;
  const date: string = post.frontmatter.date;
  const tags: string[] = post.frontmatter.tags;
  const image = getImage(post.frontmatter.thumbnail);

  return (
    <StyeldPreview>
      <StyledLink to={post.fields.slug}>
        {post.frontmatter.thumbnail && (
          <GatsbyImage image={image} alt={post.frontmatter.thumbnail.base} />
        )}
      </StyledLink>
      <Content
        title={title}
        slug={slug}
        __html={__html}
        date={date}
        tags={tags}
      />
    </StyeldPreview>
  );
};

export default Preview;
