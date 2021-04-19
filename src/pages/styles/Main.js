import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToggleContainer = styled.div`
  background-color: ${(props) => props.theme.input};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px none;
  border-radius: 10px;
  padding: 0 2%;
`;
