import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: red;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

function MainPage() {
  return (
    <div>
      <Wrapper>
        <Title>안녕. 리액트!</Title>
      </Wrapper>
    </div>
  );
}

export default MainPage;
