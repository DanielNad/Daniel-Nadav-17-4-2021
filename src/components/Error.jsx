import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateError } from "../actionsCreators/errorActions";
import { Container, Err } from "./styles/Error";

export default function Error({ message }) {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(updateError({ hasError: false }));
    }, 5000);
  }, [dispatch]);

  return (
    <Container>
      <Err>{message}</Err>
    </Container>
  );
}
