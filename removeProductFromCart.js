import { getCartProductFromLS } from "./getCartProduct";

import { updateCartValue } from "./updateCartValue";

const removeProductFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((el) => el.id !== id);

  //? update the localstorage after removing the item

  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  let removeDiv = document.getElementById(`card-${id}`);
  if (removeDiv) {
    removeDiv.remove();
  }
  updateCartValue(cartProducts);
};

export { removeProductFromCart };
