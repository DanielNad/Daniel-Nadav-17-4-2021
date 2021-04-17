import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ show }) => (show ? "red" : "blue")};
`;
export { Button };
