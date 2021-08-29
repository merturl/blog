import React from "react";
import styled, { css } from "styled-components";
import useFixed from "../../hooks/useFixed";

const StickyBlock = styled.div`
  ${({ fixed, top }: { fixed: boolean; top: number }) =>
    fixed &&
    css`
      position: fixed;
      top: ${top}px;
    `};
`;

interface DataProps {
  top: number;
  className?: string;
}

const Sticky: React.FC<DataProps> = ({ className, top, children }) => {
  const [element, fixed] = useFixed();

  return (
    <StickyBlock ref={element} className={className} fixed={fixed} top={top}>
      {children}
    </StickyBlock>
  );
};

export default Sticky;
