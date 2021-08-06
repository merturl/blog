import React, { useCallback, useEffect, useState } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../lib/styles/media";
import Sticky from "../common/Sticky";
import { getScrollTop } from "../../lib/utlis";

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
  const [activeId, setActiveId] = useState<null | string>(null);
  const [headingTops, setHeadingTops] = useState<
    { id: string; top: number }[] | null
  >(null);

  const updateTocPositions = useCallback(() => {
    if (!headings) return;
    const scrollTop = getScrollTop();
    const headingTops = headings.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) {
        return {
          id,
          top: 0,
        };
      }
      const top = el.getBoundingClientRect().top + scrollTop;
      return {
        id,
        top,
      };
    });
    setHeadingTops(headingTops);
  }, [headings]);

  useEffect(() => {
    updateTocPositions();
    let prevScrollHeight = document.body.scrollHeight;
    let timeoutId: NodeJS.Timeout | null = null;
    function checkScrollHeight() {
      const scrollHeight = document.body.scrollHeight;
      if (prevScrollHeight !== scrollHeight) {
        updateTocPositions();
      }
      prevScrollHeight = scrollHeight;
      timeoutId = setTimeout(checkScrollHeight, 250);
    }
    timeoutId = setTimeout(checkScrollHeight, 250);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [updateTocPositions]);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    if (!headingTops) return;
    const currentHeading = [...headingTops].reverse().find(headingTop => {
      return scrollTop >= headingTop.top - 4;
    });
    if (!currentHeading) {
      setActiveId(null);
      return;
    }

    setActiveId(currentHeading.id);
  }, [headingTops]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

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
