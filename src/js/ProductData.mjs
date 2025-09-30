function convertToJson(res) {
  if (res.ok) {
    // console.log(res);
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `/json/${this.category}.json`;
  }
  getData() {
    console.log(this.path);
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => {
        return data;
      });
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}
