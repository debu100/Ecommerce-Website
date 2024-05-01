import { updateCartValue } from "./updateCartValue";

const getCartProductFromLS = () => {
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);
  // console.log(cartProducts);
  //? whenever we add data to LS it is in JSON format--> but to access that data we need to parse it

  //? update cartvalue in the navbar

  updateCartValue(cartProducts);

  return cartProducts;
};

export { getCartProductFromLS };
