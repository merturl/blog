import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
  color: inherit;
  text-decoration: none;
`;

const StyledContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
`;

const StyledSection = styled.section`
  flex: 1;
  font-size: 0.875rem;
  p {
    margin: 0;
  }
  margin-bottom: 0.25rem;
`;

const StyledTime = styled.time`
  font-size: 0.75rem;
  color: rgb(134, 142, 150);
  padding: 0.5rem 1rem;
`;

const StyeldTitle = styled.h4`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(33, 37, 41);
  margin-bottom: 0.25rem;
`;

const StyeldTags = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  span {
    display: inline-flex;
    font-size: 0.75rem;
    color: white;
    background-color: rgb(138, 43, 226);
    border-radius: 0.75rem;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
    line-height: 1.2rem;
  }
`;

type DataProps = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  __html: string;
};

const Content = ({ title, slug, date, tags, __html }: DataProps) => {
  return (
    <StyledLink to={slug}>
      <StyledContent>
        <StyeldTitle itemProp="headline">{title}</StyeldTitle>
        <StyledSection itemProp="description">
          <p
            dangerouslySetInnerHTML={{
              __html,
            }}
          />
        </StyledSection>
      </StyledContent>
      <StyeldTags>
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </StyeldTags>
      <StyledTime>{date}</StyledTime>
    </StyledLink>
  );
};

export default Content;
