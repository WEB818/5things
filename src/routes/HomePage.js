import React from "react";
import Today from "../components/Today";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeStyle = styled.div`
  font-size: 30px;
  margin-top: 15%;
`;

const ValidateButton = styled.button`
  background-color: #188072;
  border: 1px solid #a8ffdc;
  color: #a8ffdc;
  font-size: 20px;
  padding: 20px;
  margin-top: 50%;
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
