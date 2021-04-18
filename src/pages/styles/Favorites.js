import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.fontColor};
  padding: 2rem 0;
`;

export { Container };
