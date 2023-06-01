import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: lightgrey;
`;

const Black = styled.div`
  padding: ${(props) => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: blod;
  text-align: center;
`;
const blackItems = [
  { label: "1", padding: "1rem", backgroundColor: "red" },
  { label: "2", padding: "3rem", backgroundColor: "green" },
  { label: "3", padding: "2rem", backgroundColor: "blue" },
];

function Blacks(props) {
  return (
    <Wrapper>
      {blackItems.map((item) => {
        return (
          <Black padding={item.padding} backgroundColor={item.backgroundColor}>
            {item.label}
          </Black>
        );
      })}
    </Wrapper>
  );
}

export default Blacks;
