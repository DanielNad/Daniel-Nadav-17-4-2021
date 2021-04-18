import styled from "styled-components";
import defaultBackground from "../../images/defaultBackground.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${({ image }) => (image ? image : defaultBackground)});
  padding: 5rem 0;
  transition: all 2s linear;
`;
