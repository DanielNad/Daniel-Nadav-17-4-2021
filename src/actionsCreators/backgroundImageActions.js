import { SET_IMAGES } from "../constants/backgroundActionType";

const setImages = (images) => ({
  type: SET_IMAGES,
  payload: images,
});

export { setImages };
