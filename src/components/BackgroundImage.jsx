import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "./styles/BackgroundImage";

export default function BackgroundIamge() {
  const { images } = useSelector((state) => state);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let newIndex = Math.floor(Math.random() * images?.length);
      setImageIndex(newIndex);
    }, 5000);
    return () => clearTimeout(timer);
  }, [imageIndex, images]);

  return <Container image={images[imageIndex]}></Container>;
}
