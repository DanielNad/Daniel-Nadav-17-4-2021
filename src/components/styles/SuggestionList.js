import styled, { keyframes } from "styled-components";

const dropdown = keyframes`
  0% {max-height:0;}
  100% {max-height:100vh;}
`;

export const Suggestions = styled.ul`
  position: absolute;
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
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
