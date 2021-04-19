import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 40%;
  margin-top: 5%;
  display: grid;
  width: 50%;
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

const Header = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 50%;
`;

export { Container, Header, Image };
