import "./skeleton.css";
import React from "react";
import styled, { keyframes } from "styled-components";
const shining = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const StyeldItem = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
`;

const StyledLabel = styled.label``;

const StyledImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: lightgray;
  position: relative;
  overflow: hidden;
  animation: ${shining} 1s ease-in-out infinite;
`;

const Skeleton = () => {
  return (
    <StyeldItem>
      <div>
        <StyledImg />
      </div>
      <div className="skeleton-info">
        <p className="skeleton-name"> </p>
        <p className="skeleton-email" />
      </div>
    </StyeldItem>
  );
};

export default Skeleton;
