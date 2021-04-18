import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem;
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Navitem = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  margin: 0 1rem;
  transition: all 0.1s ease-in;
  &:hover {
    color: #51c4d3;
  }
`;

export const CheckBoxLabel = styled.label`
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
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
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #343f56;
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
