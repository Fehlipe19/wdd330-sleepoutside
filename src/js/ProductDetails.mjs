import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    // ****
    // console.log(this.productId);
    this.product = await this.dataSource.findProductById(this.productId);
    // console.log(this.product);
    this.renderProductDetails();
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addProductToCart.bind(this));
    // console.log(this);
  }
  addProductToCart() {
    const myCart = getLocalStorage("so-cart") || [];
    myCart.push(this.product);
    setLocalStorage("so-cart", myCart);
  }
  renderProductDetails() {
    productDetailsTemplate(this.product);
  }
}

function productDetailsTemplate(product) {
  //   console.log(product);
  document.querySelector("h2").textContent = product.Brand.Name;
  document.querySelector("h3").textContent = product.NameWithoutBrand;

  const productImage = document.getElementById("productImage");
  productImage.src = product.Image;
  productImage.alt = product.nameWithoutBrand;

  document.getElementById("productPrice").textContent = product.FinalPrice;
  document.getElementById("productColor").textContent =
    product.Colors[0].ColorName;
  document.getElementById("productDesc").innerHTML =
    `${product.DescriptionHtmlSimple}`;

  document.getElementById("addToCart").dataset.id = product.Id;
}
