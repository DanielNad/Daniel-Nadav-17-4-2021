import { useSelector } from "react-redux";
import { Container } from "./styles/BackgroundImage";

export default function BackgroundIamge() {
  const { images } = useSelector((state) => state);
  const index = Math.floor(Math.random() * images?.length);

  return <Container image={images[index]}></Container>;
}
