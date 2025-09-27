import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  renderCartTotal(cartItems);
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
  <img
  src="${item.Image}"
  alt="${item.Name}"
  />
  </a>
  <a href="#">
  <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;

  return newItem;
}

function calculateTotal(itemsPrice) {
  let total = 0;
  total += itemsPrice.FinalPrice;

  return total;
}

function renderCartTotal(cartList) {
  let total = 0;
  const priceItems = cartList.map((item) => calculateTotal(item));
  const totalDisplaySection = document.querySelector(".products");

  console.log(priceItems);
  priceItems.forEach((element) => {
    total += element;
  });

  const totalElement = document.createElement("h4");
  totalElement.classList.add("center-text");
  totalElement.innerHTML = `Total: $${total}`;

  totalDisplaySection.appendChild(totalElement);
}

loadHeaderFooter();
renderCartContents();
