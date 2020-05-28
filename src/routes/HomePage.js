import React from "react";
import Today from "../components/Today";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
`;

const TimeStyle = styled.div`
  font-size: 40px;
`;

const ValidateButton = styled.button`
  padding: 80px;
  margin-top: 20px;
  background-color: pink;
  border: none;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <TimeStyle>
        <Today />
      </TimeStyle>
      <ValidateButton>Validate Yourself</ValidateButton>
    </Wrapper>
  );
}
