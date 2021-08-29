import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLogo = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  max-width: 975px;
  flex-direction: row;
  width: 100%;
  margin: auto;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  white-space: pre-wrap;
  word-break: break-all;
  font-weight: bold;
  &:hover {
    font-weight: 600;
  }
`;

const StyledHeader = styled.header`
  background: #8a2be2;
  min-height: 54px;
  display: flex;
  align-items: center;
`;

interface DataProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: DataProps) => {
  return (
    <StyledHeader>
      <StyledLogo>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </StyledLogo>
    </StyledHeader>
  );
};

export default Header;
