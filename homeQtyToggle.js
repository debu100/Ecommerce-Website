const homeQtyToggle = (e, id, stock) => {
  const currentCard = document.querySelector(`#card-${id}`);
  //? we are getting the whole card from currCard(the card on which the user is clicking)
  const productQty = currentCard.querySelector(".qty");
  //? getting <p> tag for qty
  let qty = parseInt(productQty.getAttribute("data-qty")) || 1;
  //  ? getting the actual / strating value of qty

  if (e.target.className === "cart-increment") {
    if (qty < stock) {
      qty += 1;
    } else if (qty === stock) {
      alert(`Total number of stocks reached`);
    }
  }
  if (e.target.className === "cart-decrement") {
    if (qty > 1) {
      qty -= 1;
    } else {
      alert(`Product Quantity can't be less than one`);
    }
  }
  productQty.textContent = qty;
  productQty.setAttribute("data-qty", qty);
  return qty;
};

export { homeQtyToggle };
