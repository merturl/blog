import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledTag = styled.div`
  padding: 0.15rem;
  display: flex;
`;

const StyledStrong = styled(Link)`
  height: 1.5rem;
  display: block;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 0.75rem;
  border-radius: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background: #8a2be2;
  color: white;
  line-height: 2;
  text-decoration: none;
  &:hover {
    color: #8a2be2;
    background: white;
    transition: 0.125s all ease-in;
  }
`;

type DataProps = {
  tag: string;
};

const PostTag = ({ tag }: DataProps) => {
  return (
    <StyledTag>
      <StyledStrong to={`/?tag=${tag}`}>{tag}</StyledStrong>
    </StyledTag>
  );
};

export default PostTag;
