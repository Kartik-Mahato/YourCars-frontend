import React from "react";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";

import Logo from "../Logo";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const FooterContainer = styled.div`
  /* min-height: 24em; */
  background-color: #1d2124;
  /* background-color: rgb(31, 42, 76); */
  ${tw`
        flex
        flex-wrap
        min-w-full
        pt-10
        md:pt-10
        items-center
        justify-center
    `}
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        w-full
        h-full
        max-w-screen-2xl
    `}
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3
    `}
`;

const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        mt-2
    `}
`;

const SectionContainer = styled.div`
  ${tw`
        w-full
        md:w-auto
        flex
        flex-col
        mr-2
        md:mr-12
        pl-10
        pr-10
        mt-6
        md:mt-0
    `}
`;

const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
        mt-3
    `}
`;

const ListItem = styled.li`
  ${tw`
        mb-3
    `}

  & > a {
    ${tw`
        text-sm
        text-white
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
        text-2xl
        font-bold
        text-white
    `}
`;

const RedIcon = styled.h3`
  ${tw`
        w-9
        h-9
        bg-red-500
        rounded-full
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `}
`;

const HorizontalContainer = styled.div`
  ${tw`
        flex
        items-center
        mt-3
    `}
`;

const SmallText = styled.h6`
  ${tw`
        text-sm
        text-white
    `}
`;

const CopyrightContainer = styled.div`
  ${tw`
    min-w-full
    flex
    justify-center
    mt-4
  `}
`;

const CopyrightText = styled.small`
  font-size: 14px;
  ${tw`
    text-gray-500
  `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color={"white"}></Logo>
          <AboutText>
            YourCar is a car renting and selling company located in many
            counties across the world which has high quality cars and top rated
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blogs</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQs</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+91 725077955</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Email</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <CopyrightContainer>
          <CopyrightText>
            Copyright &copy; {new Date().getFullYear()} YourCar. All rights
            reserved
          </CopyrightText>
        </CopyrightContainer>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
