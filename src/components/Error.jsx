import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateError } from "../actions/errorActions";
import { Container } from "./styles/Error";

export default function Error({ message }) {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(updateError({ hasError: false }));
    }, 5000);
  }, [dispatch]);

  return <Container>{message}</Container>;
}
