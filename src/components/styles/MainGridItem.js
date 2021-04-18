import styled from "styled-components";
import Heart from "../../images/heart.png";
import RedHeart from "../../images/redHeart.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 2rem;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  transition: all 3s ease-in-out;
`;

const HeartImage = styled.img.attrs((props) => ({
  src: props.isFavorite ? RedHeart : Heart,
}))``;

export { Container, InnerContainer, Button, HeartImage };
