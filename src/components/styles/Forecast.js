import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  align-items: self-end;
  display: grid;
  width: 60vw;
  height: 60vh;
  grid-template-columns: 2fr repeat(4, 1fr);
  grid-template-rows: 1fr 4fr;
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
