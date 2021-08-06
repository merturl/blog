import React from "react";
import Img, { FluidObject, GatsbyImageProps } from "gatsby-image";
import styled from "styled-components";

type DataProps = {
  widthRatio: number;
  heightRatio: number;
  fluid: FluidObject | FluidObject[];
};

type StyledProps = {
  widthRatio: number;
  heightRatio: number;
} & GatsbyImageProps;

const Image = styled(Img)<StyledProps>`
  div:first-child {
    padding-bottom: ${(props: StyledProps) =>
      `${(props.heightRatio / props.widthRatio) * 100}% !important`};
  }
`;

const Thumbnail = ({ widthRatio, heightRatio, fluid }: DataProps) => {
  return (
    <Image widthRatio={widthRatio} heightRatio={heightRatio} fluid={fluid} />
  );
};

export default Thumbnail;
