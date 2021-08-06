import React from "react";
import styled, { css } from "styled-components";

type StyleProps = {
  isSelect: boolean;
};

const StyledTag = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.15rem;
  display: flex;
  height: 32px;
  border-radius: 0.75rem;
  border: 1px solid;
  color: #8a2be2;
  background: white;
  margin: 12px;
  margin-left: 0;
  ${({ isSelect }: StyleProps) =>
    isSelect &&
    css`
      background: #8a2be2;
      color: white;
      transition: 0.125s all ease-in;
    `};
`;

const StyledStrong = styled.strong`
  display: block;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  min-width: 5rem;
`;

type DataProps = {
  tag: string;
  selectTag: string;
  setSelectTag: (value: string) => void;
};

const Tag = ({ tag, selectTag, setSelectTag }: DataProps) => {
  const isSelect = tag === selectTag ? true : false;
  return (
    <StyledTag isSelect={isSelect} onClick={() => setSelectTag(tag)}>
      <StyledStrong>{tag}</StyledStrong>
    </StyledTag>
  );
};

export default Tag;
