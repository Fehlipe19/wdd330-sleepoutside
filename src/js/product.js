import {
  getLocalStorage,
  setLocalStorage,
  getParam,
  loadHeaderFooter,
  displayItemCount,
} from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

export const dataSource = new ProductData("tents");
export const productId = getParam("product");

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
