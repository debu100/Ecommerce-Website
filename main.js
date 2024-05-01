import "./style.css";

import products from "./api/products.json";

import { showProductBox } from "./homeproductscards";
//? navbar
const ham = document.querySelector(".ham");

const allLinks = document.querySelectorAll("nav li a");

const ul = document.querySelector("nav ul");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  ul.classList.toggle("active");
});

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    ham.classList.remove("active");
    ul.classList.remove("active");
  });
});

//? products
showProductBox(products);
