import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../components/BookCard";
import Marginer from "../../components/Marginer";

import Navbar from "../../components/Navbar";
import AboutUs from "./AboutUs";
import BookingSteps from "./BookingSteps";
import TopSection from "./TopSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

const Homepage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="4em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="4em" />
      <AboutUs />
    </PageContainer>
  );
};

export default Homepage;
