export const Increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const Decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const FetchAPI = (Img) => {
  return {
    type: "FetchAPI",
    payload: Img,
  };
};
