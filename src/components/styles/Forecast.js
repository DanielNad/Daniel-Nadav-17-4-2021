import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  top: 30%;
  width: 50%;
  height: 70%;

  @media screen and (max-width: 600px) {
    top: 20%;
    height: 20%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  grid-template-rows: 1fr 4fr;
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.fontColor};
  border: 2px solid;
  border-radius: 1em;

  @media screen and (max-width: 600px) {
    top: 25%;
  }
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

const Header = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 50%;
`;

export const CheckBoxLabel = styled.label`
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  margin: 0 1rem;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  display: none;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${(props) => props.theme.secondary};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export { Container, Grid, Header, Image };
