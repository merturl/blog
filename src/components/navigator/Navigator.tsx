import React from "react";
import { Link } from "gatsby";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import styled from "styled-components";
import { mediaQuery } from "../../lib/styles/media";

type DataProps = {
  previous: any;
  next: any;
};

const Block = styled.div`
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  .previous,
  .next {
    margin: 10px;
    ${mediaQuery(767)} {
      width: 100%;
    }
  }
`;

const StyledLink = styled(Link)`
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background: #8a2be2;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.125s all ease-in;
  &:hover {
    color: #8a2be2;
    background: white;
    svg {
      color: #8a2be2;
      border-color: #8a2be2;
    }
  }
`;

const StyledLeftIcon = styled(FaArrowAltCircleLeft)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  font-size: 1.5rem;
  color: white;
  margin-right: 1rem;
  transition: 0.125s all ease-in;
`;

const StyledRightIcon = styled(FaArrowAltCircleRight)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  font-size: 1.5rem;
  color: white;
  margin-left: 1rem;
  transition: 0.125s all ease-in;
`;

const Navigator = ({ previous, next }: DataProps) => {
  return (
    <Block>
      <div className="previous">
        {previous && (
          <StyledLink to={previous.fields.slug}>
            <StyledLeftIcon />
            <h3>{previous.frontmatter.title}</h3>
          </StyledLink>
        )}
      </div>
      <div className="next">
        {next && (
          <StyledLink to={next.fields.slug}>
            <h3>{next.frontmatter.title}</h3>
            <StyledRightIcon />
          </StyledLink>
        )}
      </div>
    </Block>
  );
};

export default Navigator;
