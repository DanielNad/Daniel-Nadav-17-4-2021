import styled, { keyframes } from "styled-components";

const hideReuslts = keyframes`
0%{
  opacity: 0
}
100%{
opacity: 1
}
`;

const Container = styled.li`
  cursor: pointer;
  margin: 0.5rem 0;
  width: 100%;
  animation: ${hideReuslts};
  animation-duration: 3s;
  &:hover {
    border: 0.1px solid;
    border-radius: 10px;
    border-color: ${(props) => props.theme.secondary};
    background-color: ${(props) => props.theme.body};
  }
`;

const Paragraph = styled.p`
  margin: 0.5rem;
`;

export { Container, Paragraph };
