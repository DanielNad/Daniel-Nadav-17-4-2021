import styled, { keyframes } from "styled-components";

const dropdown = keyframes`
  0% {max-height:0;}
  100% {max-height:100vh;}
`;

export const Suggestions = styled.ul`
  position: absolute;
  top: 77%;
  padding: 0;
  padding-bottom: 1rem;
  margin-top: 0;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.body};
  animation: ${dropdown};
  animation-duration: 2s;
`;
