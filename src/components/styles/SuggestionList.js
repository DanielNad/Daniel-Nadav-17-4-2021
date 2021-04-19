import styled, { keyframes } from "styled-components";

const dropdown = keyframes`
  0% {max-height:0;}
  100% {max-height:100vh;}
`;

export const Suggestions = styled.ul`
  z-index: 1;
  padding: 0;
  position: relative;
  margin: 0 2rem;
  max-height: 400px;
  top: 60%;
  width: 80%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: #bfdbf7;
  color: #022b3a;
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.fontColor};
  animation: ${dropdown};
  animation-duration: 1s;
  border: 1px solid;
  border-radius: 3px;
  border-top: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
