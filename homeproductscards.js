import { homeQtyToggle } from "./homeQtyToggle";

import { addToCart } from "./addtocart";

const productBox = document.querySelector(".product-box");

const productTemplate = document.querySelector(".product-template");

const showProductBox = (products) => {
  if (!products) {
    return false;
  }
  products.forEach((el) => {
    const {
      brand,
      category,
      description,
      id,
      image,
      name,
      price,
      actual_price,
      stock,
    } = el;

    //? cloning all the html code of an individual card in productClone
    const productClone = document.importNode(productTemplate.content, true);

    //? accessing unique card id(to get the idea about which card was targeted)
    productClone.querySelector("#card-value").setAttribute("id", `card-${id}`);

    //? DOM Manipulation
    productClone.querySelector(".product-name").textContent = name;
    productClone.querySelector(".product-img").src = image;
    productClone.querySelector(".product-img").alt = name;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".product-price").textContent = `₹ ${price}`;
    productClone.querySelector(
      ".product-actual-price"
    ).textContent = `₹ ${actual_price}`;
    productClone.querySelector(".product-stock").textContent = stock;
    productClone.querySelector(".product-description").textContent =
      description;

    //? using event delegation for incrementing and decrementing product qty--> targeting the parent and manipulating child elements

    productClone
      .querySelector(".stock-element")
      .addEventListener("click", (e) => {
        homeQtyToggle(e, id, stock);
      });

    //? Add To Cart Functionality

    productClone
      .querySelector(".add-to-cart-btn")
      .addEventListener("click", (e) => {
        addToCart(e, id, stock);
      });

    //? appending all the cards in the document
    productBox.append(productClone);
  });
};

export { showProductBox };
