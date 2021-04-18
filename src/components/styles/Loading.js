import styled, { keyframes } from "styled-components";

const Load = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loading = styled.div`
  display: ${(props) => (props.hasError ? "none" : "inherit")};
  margin-top: 2rem;
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid;
  width: 5vh;
  height: 5vh;
  animation: ${Load} 2s linear infinite;
`;

export { Loading };
