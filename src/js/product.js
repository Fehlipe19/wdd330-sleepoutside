import {
  getLocalStorage,
  setLocalStorage,
  getParam,
  loadHeaderFooter,
  displayItemCount,
} from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";

export const productId = getParam("product");

const dataSource = new ExternalServices();

const product = new ProductDetails(productId, dataSource);

loadHeaderFooter();
product.init();
displayItemCount();

// function addProductToCart(product) {
//   let myCart = getLocalStorage("so-cart") || [];
//   myCart.push(product);
//   setLocalStorage("so-cart", myCart);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
