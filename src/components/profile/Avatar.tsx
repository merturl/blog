import React from "react";
import styled, { keyframes } from "styled-components";

type DataProps = {
  avatarUrl: string;
};

const pulse = keyframes`
 	0% {
		box-shadow: rgba(138, 43, 226, 0.7) 0px 0px 0px 0px;
	}

	70% {
		box-shadow: rgba(138, 43, 226, 0) 0px 0px 0px 10px;
	}

	100% {
		box-shadow: rgba(138, 43, 226, 0) 0px 0px 0px 0px;
	}
`;

const StyledAvatar = styled.div`
  animation: ${pulse} 2s 1;
  width: 8rem;
  border-radius: 50%;
  .image-wrap {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
  }
  img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    box-shadow: rgba(138, 43, 226, 1) 0px 0px 0px 0px;
    border-radius: 50%;
    object-fit: cover;
    transition: all 0.125s ease-in 0s;
  }
`;

const Avatar = ({ avatarUrl }: DataProps) => {
  return (
    <StyledAvatar>
      <div className={"image-wrap"}>
        <img src={avatarUrl} />
      </div>
    </StyledAvatar>
  );
};

export default Avatar;
