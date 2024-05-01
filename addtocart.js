import { getCartProductFromLS } from "./getCartProduct";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

const addToCart = (e, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProductCard = document.querySelector(`#card-${id}`);
  //? we are getting the whole card from currCard(the card on which the user is clicking)

  let quantity = currentProductCard.querySelector(".qty").innerText;
  //? getting <p> tag for qtys

  let actualPrice = currentProductCard.querySelector(
    ".product-actual-price"
  ).innerText;

  //? updating price before adding to LS
  actualPrice = actualPrice.replace("₹", "");

  //?handling existing add to cart products

  let existingProduct = arrLocalStorageProduct.find((el) => el.id === id);

  if (existingProduct && quantity > 1) {
    // console.log(quantity);

    //? updating qty with curr qty and prv ls qty

    quantity = Number(existingProduct.quantity) + Number(quantity);

    actualPrice = Number(actualPrice * quantity);

    let updateCart = { id, quantity, actualPrice };

    updateCart = arrLocalStorageProduct.map((currEl) => {
      return currEl.id === id ? updateCart : currEl;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
  }

  if (existingProduct) {
    //? alert(`Product already added`);--> if user clicks add to cart without incrementing the qty of product
    return false;
  }

  //? setting data to localstorage
  actualPrice = Number(actualPrice * quantity);

  quantity = Number(quantity);

  let updatedCart = { id, quantity, actualPrice };

  arrLocalStorageProduct.push(updatedCart);
  //? when we add data in LS in must be in string format--> converting json object into string
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //? update cartvalue in the navbar

  updateCartValue(arrLocalStorageProduct);
};

export { addToCart };
