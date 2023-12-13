// Reducer
const initialState = localStorage.getItem("Books")
  ? JSON.parse(localStorage.getItem("Books"))
  : [];

export const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BASKET":
      const itemExists = state.some((item) => item.id === action.payload.id);
      if (itemExists) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        const newState = [...state, { ...action.payload, count: 1 }];
        saveBasketToLocalStorage(newState);
        return newState;
      }
    case "INCREASE":
      const increasedState = state.map((item) =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      );
      saveBasketToLocalStorage(increasedState);
      return increasedState;
    case "DECREASE":
      const updatedBasket = state.map((item) => {
        if (item.id === action.payload) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return { ...item, count: 0 };
          }
        }
        return item;
      });
      const filteredBasket = updatedBasket.filter((item) => item.count > 0);
      saveBasketToLocalStorage(filteredBasket);
      return filteredBasket;
    default:
      return state;
  }
};

const saveBasketToLocalStorage = (basket) => {
  localStorage.setItem("Books", JSON.stringify(basket));
};
