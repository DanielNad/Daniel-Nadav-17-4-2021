import styled from "styled-components";

// TODO: Hover, close onClick

const Container = styled.li`
  cursor: pointer;
  margin-top: 0.5rem;
  padding-left: 2rem;
  width: 100%;
  transition: all 0.1s ease-in;
  &:hover {
    overflow: hidden;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.input};
  }
`;

export { Container };
