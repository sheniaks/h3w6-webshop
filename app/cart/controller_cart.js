import Publisher from "../publisher.js";
import ModelCart from "./model_cart.js";
import ViewCart from "./view_cart.js";

export default class ControllerCart {
  constructor() {
    this.model = new ModelCart();
    this.pub = new Publisher();
    this.view = new ViewCart(
      this.handleDeleteItemFromCart,
      this.handleUpdateCounterCart
    );
    this.pub.subscribe("ON_BUY_CLICK", this.handleAddToCart);
    this.pub.subscribe("ON_BUY_CLICK", this.handleClickOpenModalCart);
    this.pub.subscribe("ON_CART_CLICK", this.handleClickOpenModalCart);
    this.pub.subscribe("ON_MODAL_BUY_CLICK", this.handleAddToCart);
    this.pub.subscribe("ON_ORDER_NOW_CLICK", this.sendInfOrder);
    this.pub.subscribe("ORDER_RECEIVED_MODAL", this.handleOrderRecievedModal);
  }

  handleAddToCart = (product) => {
    this.model.addToArrayForCart(product);
    this.model.updateLocalStorage();
    this.model.addToSpanCart();
  };

  handleClickOpenModalCart = (_) => {
    const data = this.model.getFromLocalStorage();
    this.view.renderCartModal(data);
    this.view.showModal();
    this.view.addListenersForCloseModalAndButtonClick();
    this.view.addListenerBtnOrderNow();
  };

  handleDeleteItemFromCart = (id) => {
    this.model.data = this.model.data.filter((el) => el.id !== id);
    this.model.updateLocalStorage();
    this.view.renderCartModal(this.model.getFromLocalStorage());
    this.model.addToSpanCart();
  };

  handleUpdateCounterCart = (el) => {
    let changeElement = this.model.data.find(
      (item) => item.id === el.dataset.id
    );
    changeElement.count = el.value;
    this.model.updateLocalStorage();
    this.view.renderCartModal(this.model.getFromLocalStorage());
    this.model.addToSpanCart();
  };

  handleOrderRecievedModal = () => {
    this.view.renderOrderRecievedModal();
};

  sendInfOrder = (ev) => {
    const itemsOrder = this.model.getFromLocalStorage();
    if (itemsOrder != 0) {
      const formInputs = document.querySelectorAll(".info-input");
      const inputEmail = document.querySelector(".info-input-email");
      const inputPhone = document.querySelector(".info-input-phone");
      const inputName = document.querySelector(".info-input-name");
      const emailVal = inputEmail.value;
      const phoneVal = inputPhone.value;
      const nameVal = inputName.value;
      const emptyInputs = Array.from(formInputs).filter(
        (input) => input.value === ""
      );

      formInputs.forEach((input) => {
        if (input.value === "") {
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });
      if (emptyInputs.length !== 0) {
        console.log("inputs not filled");
        return false;
      }
      if (!ViewCart.validateEmail(emailVal)) {
        console.log("email not valid");
        inputEmail.classList.add("error");
        return false;
      } else {
        inputEmail.classList.remove("error");
      }
      if (ViewCart.validateCountry(emailVal)) {
        console.log("email from Columbia");
        inputEmail.classList.add("error");
        return false;
      } else {
        inputEmail.classList.remove("error");
      }
      if (!ViewCart.validatePhone(phoneVal)) {
        console.log("phone not valid");
        inputPhone.classList.add("error");
        return false;
      } else {
        inputPhone.classList.remove("error");
      }                             
      const ID_CHAR = 176036857;
      const TG_BASE_URL =
          "https://api.telegram.org/bot5282310967:AAHn2R-8h5q8lUslewSU0IFhFdB8mrI3gIg/sendMessage?";
      let text = `New order%0AClient: ${nameVal}%0APhone: ${phoneVal}%0AEmail: ${emailVal}%0A`;
      let sumOrder = 0;
      const dateOrder = Date.now();

      itemsOrder.forEach((value) => {
        text += `Product id: ${value["id"]} Amount: x${value["count"]}%0A`;
        sumOrder += parseFloat(value["aprice"]) * value["count"];
      });

      sumOrder = sumOrder.toFixed(2);
      const countProducts = itemsOrder.length;
      text += `Total order amount ${sumOrder}`;

      const orders = JSON.parse(localStorage.getItem("historyOrders"));

      orders.push({ dateOrder, countProducts, sumOrder });
      localStorage.setItem("historyOrders", JSON.stringify(orders));

      const url = `${TG_BASE_URL}chat_id=${ID_CHAR}&text=${text}`;
      fetch(url);
      this.pub.notify("ORDER_RECEIVED_MODAL");
      localStorage.removeItem("games");
      localStorage.setItem("counter", 0);
      this.model.nullSpanCart();
      this.view.renderCartModal();
    } else {
      ev.target.classList.add("disabled");
    }
  };
}
