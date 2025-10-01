import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, displayItemCount } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
// console.log(dataSource);

const element = document.querySelector(".product-list");

const productList = new ProductList("Tents", dataSource, element);
// console.log(productList.init());

productList.init();
displayItemCount();
