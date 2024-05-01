import { getCartProductFromLS } from "./getCartProduct";

const fetchQuantityFromCartLS = (id, actualPrice) => {
  let cartProducts = getCartProductFromLS();

  let existingProduct = cartProducts.find((el) => el.id === id);

  let quantity = 1;

  if (existingProduct) {
    quantity = existingProduct.quantity;

    actualPrice = existingProduct.actualPrice;
  }

  return { quantity, actualPrice };
};

export { fetchQuantityFromCartLS };
