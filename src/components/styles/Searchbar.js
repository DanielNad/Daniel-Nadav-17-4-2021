import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Search = styled.input`
  outline: none;
  height: 35px;
  border: none;
  border-radius: 30px;
  padding-left: 2rem;
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.body};
`;

export const Button = styled.button`
  position: relative;
  outline: none;
  height: 30px;
  border: none;
  border-radius: 30px;
  right: 60px;
  background-color: #009ad8;
  transition: all 0.2s;
  color: white;
  :hover {
    background-color: #28527a;
    cursor: pointer;
  }
`;
