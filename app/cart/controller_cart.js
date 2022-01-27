import Publisher from "../publisher.js";
import ModelCart from "./model_cart.js";
import ViewCart from "./view_cart.js";

export default class ControllerCart {
  constructor() {
    this.model = new ModelCart();
    this.pub = new Publisher();
    this.view = new ViewCart(
      this.handleDeleteItemFromCart,
      this.handleUpdateCounterCart,
    );
    this.pub.subscribe("ON_BUY_CLICK", this.handleAddToCart);
    this.pub.subscribe("ON_BUY_CLICK", this.handleClickOpenModalCart);
  }

  handleAddToCart = (product) => {
    this.model.addToArrayForCart(product);
    this.model.updateLocalStorage(); 
    this.model.addToSpanCart();
  };

  handleClickOpenModalCart = _ => {
    const data = this.model.getFromLocalStorage();
    this.view.renderCartModal(data);
    this.view.showModal();
    this.view.addListenersForCloseModalAndButtonClick();
  };
  
  handleDeleteItemFromCart = id => {
    this.model.data = this.model.data.filter(el => el.id !== id);
    this.model.updateLocalStorage();
    this.view.renderCartModal(this.model.getFromLocalStorage());
    this.model.addToSpanCart();
  };

  handleUpdateCounterCart = (el) => {
    let changeElement = this.model.data.find(item => item.id === el.dataset.id);
    changeElement.count = el.value;
    this.model.updateLocalStorage();
    this.view.renderCartModal(this.model.getFromLocalStorage());
    this.model.addToSpanCart();
  }
  
}
