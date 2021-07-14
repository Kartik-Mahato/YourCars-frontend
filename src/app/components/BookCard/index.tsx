import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import Marginer from "../Marginer";
import Button from "../Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { SCREENS } from "../Responsive";
import Moment from "react-moment";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pr-6
        md:pl-6
    `}
`;

const IconContainer = styled.div`
  ${tw`
        flex
        items-center
        relative
    `}
`;

const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`;

const Name = styled.span`
  ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45px;
  ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `}
`;

const SmallIcon = styled.span`
  ${tw`
        text-gray-500
        fill-current
        md:text-base
        ml-2
    `}
`;

const DateCalendar = styled(Calendar)`
  max-width: none !important;
  position: absolute;
  top: 3em;
  left: 0em;
  user-select: none;
  z-index: 100;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `}

  @media (min-width: ${SCREENS.md}) {
    top: -3.5em;
    left: -2em;
  }
` as any;

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [returnCalendarOpen, setReturnCalendarOpen] = useState<boolean>(false);

  const toggleStartCalendar = () => {
    setCalendarOpen(!calendarOpen);
    if (returnCalendarOpen) {
      setReturnCalendarOpen(false);
    }
  };
  const toggleReturnCalendar = () => {
    setReturnCalendarOpen(!returnCalendarOpen);
    if (calendarOpen) {
      setCalendarOpen(false);
    }
  };
  return (
    <CardContainer>
      <IconContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartCalendar}>
          <Moment format={"DD/MM/YYYY"}>{startDate}</Moment>
        </Name>
        <SmallIcon>
          <FontAwesomeIcon icon={calendarOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {calendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </IconContainer>
      <LineSeparator />
      <IconContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnCalendar}>
          <Moment format={"DD/MM/YYYY"}>{returnDate}</Moment>
        </Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={returnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {returnCalendarOpen && (
          <DateCalendar
            offset={true}
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
      </IconContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text={"Book Your Ride"} />
    </CardContainer>
  );
};

export default BookCard;
