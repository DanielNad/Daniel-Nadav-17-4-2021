import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 15%;
  border-radius: 2em;
  border: 2px solid;
  border-color: ${(props) => props.theme.secondary};
`;

export const Button = styled.button`
  position: relative;
  outline: none;
  height: 30px;
  border: none;
  border-radius: 30px;
  background-color: #009ad8;
  transition: all 0.2s;
  color: white;
  :hover {
    border: 1px solid;
    background-color: #28527a;
    border-color: ${(props) => props.theme.secondary};
    cursor: pointer;
  }
`;

export { Container };
