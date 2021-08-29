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

type DataProps = {
  title: string;
  slug: string;
  date: string;
  __html: string;
};

const Content = ({ title, slug, date, __html }: DataProps) => {
  return (
    <StyledLink to={slug}>
      <StyledContent>
        <StyeldTitle itemProp="headline">{title}</StyeldTitle>
        <StyledSection itemProp="description">
          <p
            itemProp="description"
            dangerouslySetInnerHTML={{
              __html,
            }}
          />
        </StyledSection>
      </StyledContent>
      <StyledTime>{date}</StyledTime>
    </StyledLink>
  );
};

export default Content;
