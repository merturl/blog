import React, { useContext } from "react";
import styled from "styled-components";
import { mediaQuery } from "../../lib/styles/media";
import SelectTagContext from "../tag/TagContext";
import Preview from "./Preview";

const StyledPreviewList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${mediaQuery(944)} {
    flex-direction: row;
  }
  ${mediaQuery(767)} {
    margin: 1rem;
    flex-direction: column;
  }
`;

type DataProps = {
  posts: any;
};

const PreviewList = ({ posts }: DataProps) => {
  const selectTag = useContext(SelectTagContext);
  const { value } = selectTag;
  if (value === "all") {
    return (
      <StyledPreviewList>
        {posts.map(post => {
          return <Preview post={post} key={post.fields.slug} />;
        })}
      </StyledPreviewList>
    );
  }
  return (
    <StyledPreviewList>
      {posts
        .filter(
          post => post.frontmatter.tags && post.frontmatter.tags.includes(value)
        )
        .map(post => {
          return <Preview post={post} key={post.fields.slug} />;
        })}
    </StyledPreviewList>
  );
};

export default PreviewList;
