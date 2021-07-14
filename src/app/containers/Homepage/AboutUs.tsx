import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SCREENS } from "../../components/Responsive";
import Jeepimg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-6
        pl-6
        md: pr-0
        md: pl-0
        bg-white
    `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  /* @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
  } */
`;

const InfoContainer = styled.div`
  ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
        pl-7
        pr-7
    `}
`;

const Title = styled.h1`
  ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    mt-4
    font-normal
`}
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={Jeepimg} alt="jeep" />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          optio totam sequi itaque mollitia! Fugiat alias corporis vel ea quam
          magnam provident deleniti, beatae ab, inventore nam aspernatur, ipsum
          odit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, officia eaque at aut odio cupiditate blanditiis harum, eius vel dolore distinctio sapiente voluptas debitis mollitia dolores? Eaque dolore iusto mollitia.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
