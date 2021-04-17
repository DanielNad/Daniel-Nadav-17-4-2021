import { useDispatch } from "react-redux";

import { changeTheme } from "../actions/themeActions";

import appLogo from "../images/appLogo.png";

import {
  Container,
  ItemsContainer,
  Navitem,
  CheckBox,
  CheckBoxLabel,
} from "./styles/Navbar";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  return (
    <Container>
      <img src={appLogo} alt="cloud" />
      <ItemsContainer>
        <Navitem to="/">Main</Navitem>
        <Navitem to="/Favorites">Favorites</Navitem>
        <CheckBox id="checkbox" type="checkbox" onClick={handleThemeChange} />
        <CheckBoxLabel htmlFor="checkbox" />
      </ItemsContainer>
    </Container>
  );
}
