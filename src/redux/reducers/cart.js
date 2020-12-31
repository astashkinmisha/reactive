import {TOGGLE_ITEM_IN_CART} from "../action-types";

const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ITEM_IN_CART: {
      // add if no item in wl
      // remove if it's present
      const updatedCart = state.cart.filter(
          (el) => el.id !== action.payload.id
      );

      if (updatedCart.length === state.cart.length) {
        updatedCart.push(action.payload);
      }

      return { ...state, cart: updatedCart };
    }

    default: {
      return state;
    }
  }
};
