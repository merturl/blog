import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../lib/styles/media";
import Sticky from "../common/Sticky";
import useToc from "../../hooks/useToc";

const Block = styled.div`
  position: relative;
`;

const Top = styled.div`
  position: absolute;
  left: 100%;
  ${mediaQuery(1365)} {
    display: none;
  }
`;

const Wrap = styled.div`
  width: 240px;
  margin-left: 5rem;
  border-left: 2px solid rgb(233, 236, 239);
  padding: 0.25rem 0.75rem;
  color: rgb(134, 142, 150);
  line-height: 1.5;
  font-size: 0.875rem;
  max-height: calc(100vh - 128px);
  overflow: hidden auto;
`;

interface StyledProps {
  $depth: number;
  $active: boolean;
}

const TocItem = styled(Link)<StyledProps>`
  font-size: 0.875rem;
  display: block;
  text-decoration: none;
  color: rgb(128, 128, 128);
  margin-left: ${({ $depth }) => `${$depth * 12}px`};
  transition: 0.125s all ease-in;
  ${props =>
    props.$active &&
    css`
      font-weight: 600;
      color: black;
      transform: scale(1.05);
    `}
`;

interface Heading {
  id: string;
  value: string;
  depth: number;
}

interface DataProps {
  headings?: Array<Heading>;
}

function Toc({ headings }: DataProps) {
  const activeId = useToc(headings);

  if (!headings || headings.length === 0) return null;

  return (
    <Block>
      <Top>
        <Sticky top={112}>
          <Wrap>
            {headings.map(({ id, value, depth }, i) => (
              <TocItem
                key={i}
                to={`#${id}`}
                $depth={depth}
                $active={activeId === id}
              >
                {value}
              </TocItem>
            ))}
          </Wrap>
        </Sticky>
      </Top>
    </Block>
  );
}

export default Toc;
