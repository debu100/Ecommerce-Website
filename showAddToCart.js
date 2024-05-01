import products from "./api/products.json";

import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";

import { getCartProductFromLS } from "./getCartProduct";

import { removeProductFromCart } from "./removeProductFromCart";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((el) => {
  return cartProducts.some((currEl) => currEl.id === el.id);
});

//? update cart page with product content

const cartElement = document.querySelector("#product-cart-container");

const templateContainer = document.querySelector(".product-template");

//? showing the cart products

const showCartProducts = () => {
  filterProducts.forEach((curel) => {
    const { category, id, image, name, stock, actualPrice } = curel;
    //? cloning all the html code of an individual card in productClone
    const productClone = document.importNode(templateContainer.content, true);

    //? accessing unique card id(to get the idea about which card was targeted)
    productClone.querySelector("#card-value").setAttribute("id", `card-${id}`);

    const lsActualData = fetchQuantityFromCartLS(id, actualPrice);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".product-img").src = image;
    productClone.querySelector(".product-name").textContent = name;
    productClone.querySelector(".product-actual-price").textContent =
      lsActualData.actualPrice;
    productClone.querySelector(".qty").textContent = lsActualData.quantity;

    //? removing item from add to cart page

    productClone
      .querySelector(".remove-to-cart-btn")
      .addEventListener("click", () => {
        removeProductFromCart(id);
      });

    //? adding and showing all the products in add to cart page
    cartElement.append(productClone);
  });
};

showCartProducts();
