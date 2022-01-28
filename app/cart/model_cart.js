export default class ModelCart {
  constructor() {
    // this.history = localStorage.setItem("historyOrders", JSON.stringify([]));
    this.history = JSON.parse(localStorage.getItem("historyOrders")) || [];
    this.cartCounter = document.querySelector(".cart_counter");
    this.data = JSON.parse(localStorage.getItem("games")) || [];
    this.span = localStorage.getItem("counter") || 0;
    this.addToSpanCart();
  }

  addToArrayForCart(product) {
    const { id, image, name, aprice } = product;
    let index = this.data.findIndex((el) => el.id == id);
    if (+index >= 0) {
      this.data[index].count++;
    } else this.data.push({ id, image, name, aprice, count: 1 });
    return this.data;
  }

  updateLocalStorage() {
    this.getCount();
    localStorage.setItem("games", JSON.stringify(this.data));
    localStorage.setItem("counter", this.span);
  }
  
  addToSpanCart = () => {
    this.cartCounter.innerHTML = localStorage.getItem("counter") || 0;
  };

  nullSpanCart() {
    return this.cartCounter.innerHTML = "";
  } 

  getCount = () => {
    this.span = this.data.reduce((sum, el) => {
      return sum + +el.count;
    }, 0);
    return this.span;
  };

  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("games")) || [];
  }

  setFullData(data) {
    this.fulldata = data;
  }

  getProductById = (id) => {
    return this.fulldata.find((item) => item.id === id);
  };
}
