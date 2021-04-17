import styled, { keyframes } from "styled-components";

const showError = keyframes`
0% {opacity:0},
100% {opacity:1}
`;

const Container = styled.div`
  box-shadow: 0px 0px 29px -14px rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 2;
  border-radius: 10px;
  background-color: red;
  padding: 2rem 4rem;
  padding-top: 2.5rem;
  max-width: 27rem;
  animation: ${showError} 1s ease;
  transition: all 0.1s ease-in;
`;
export { Container };
