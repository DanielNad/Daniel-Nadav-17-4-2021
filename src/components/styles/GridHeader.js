import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ index, theme }) =>
    index % 2 === 0 ? theme.secondary : "none"};
`;
export { Container };
