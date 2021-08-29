import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { mediaQuery } from "../../lib/styles/media";
import Header from "./Header";
import Global from "./Global";

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  flex: 1 0 auto;
  max-width: 935px;
  width: 100%;
  ${mediaQuery(944)} {
    width: 100%;
  }
  ${mediaQuery(767)} {
    width: 100%;
  }
`;

const Foother = styled.footer`
  text-align: center;
  font-size: 0.8rem;
  flex-shrink: 0;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `);

  const { title, author } = data.site.siteMetadata;

  return (
    <>
      <Global />
      <Header siteTitle={title} />
      <Main>{children}</Main>
      <Foother>©{author}</Foother>
    </>
  );
};

export default Layout;
