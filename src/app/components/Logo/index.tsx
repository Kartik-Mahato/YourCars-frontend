import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  width: auto;
  ${tw`
    h-6
    md:h-9
    `}

  img {
    width: auto;
    height: 100%;
  }
`;

const Logo = (props: ILogoProps) => {
  return (
    <LogoContainer>
      <Image>
        <img
          src={props.color !== "white" ? CarLogoImg : CarLogoDarkImg}
          alt="carLogo"
        />
      </Image>
      <LogoText color={props.color || "dark"}>YourCar</LogoText>
    </LogoContainer>
  );
};

export default Logo;
