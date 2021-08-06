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
  h4 {
    padding-left: 0.5rem;
  }
  background-color: white;
`;

const StyledSection = styled.section`
  flex: 1;
  padding-left: 0.5rem;
`;

const StyledTime = styled.time`
  padding-left: 0.5rem;
  font-size: 0.9rem;
`;

type DataProps = {
  title: string;
  slug: string;
  date: string;
  __html: string;
};

const Content = ({ title, slug, date, __html }: DataProps) => {
  return (
    <StyledContent>
      <StyledLink to={slug}>
        <h2 itemProp="headline">{title}</h2>
        <StyledSection itemProp="description">
          <p
            dangerouslySetInnerHTML={{
              __html,
            }}
          />
        </StyledSection>
        <StyledTime>{date}</StyledTime>
      </StyledLink>
    </StyledContent>
  );
};

export default Content;
