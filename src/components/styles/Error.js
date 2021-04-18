import styled, { keyframes } from "styled-components";

const showError = keyframes`
0% {opacity:0},
100% {opacity:1}
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Err = styled.div`
  padding: 1.5rem 2rem;
  box-shadow: 0px 0px 29px -14px rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 2;
  border-radius: 10px;
  background-color: #fb3640;
  animation: ${showError} 1s ease;
  transition: all 0.1s ease-in;
  color: #f8f5f1;
`;
export { Container, Err };
