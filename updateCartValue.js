//? updating cart value in navbar

const cartValue = document.querySelector(".cart-value");

const updateCartValue = (cartProducts) => {
  return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"><span>${cartProducts.length}</span></i>`);
};

export { updateCartValue };
