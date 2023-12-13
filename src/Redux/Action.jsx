export const addBasket = (item) => {
  return {
    type: "ADD_BASKET",
    payload: item,
  };
};

export const removeBasket = (id) => {
  return {
    type: "REMOVE_BASKET",
    payload: id,
  };
};

export const increase = (id) => {
  return {
    type: "INCREASE",
    payload: id,
  };
};
export const decrease = (id) => {
  return {
    type: "DECREASE",
    payload: id,
  };
};
