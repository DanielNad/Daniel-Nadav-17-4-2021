import styled from "styled-components";

export const Container = styled.div`
  position: relative;
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
  width: 60vw;
  outline: none;
  height: 35px;
  border: 2px solid;
  border-radius: 30px;
  padding-left: 2rem;
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.fontColor};
`;

export const Button = styled.button`
  position: relative;
  outline: none;
  height: 30px;
  border: none;
  border-radius: 30px;
  margin-left: -60px;
  background-color: #009ad8;
  transition: all 0.2s;
  color: white;
  :hover {
    background-color: #28527a;
    cursor: pointer;
  }
`;
