import React, { useContext } from "react";
import styled from "styled-components";
import SelectTagContext from "./TagContext";
import PostTag from "./PostTag";
import Tag from "./Tag";

const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  background: rgb(248, 249, 250);
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 0.5rem;
`;

type DataProps = {
  tags: string[];
  isPreview: boolean;
};

const Tags = ({ tags, isPreview }: DataProps) => {
  const selectTag = useContext(SelectTagContext);
  const { value, set } = selectTag;

  if (!tags) return null;

  if (isPreview) {
    return (
      <StyledTags>
        {tags.map((tag, i) => (
          <Tag key={i} tag={tag} selectTag={value} setSelectTag={set} />
        ))}
      </StyledTags>
    );
  }

  return (
    <StyledTags>
      {tags.map((tag, i) => (
        <PostTag key={i} tag={tag} />
      ))}
    </StyledTags>
  );
};

export default Tags;
