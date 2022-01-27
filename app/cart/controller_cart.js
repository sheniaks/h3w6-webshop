import Publisher from "../publisher.js";
import ModelCart from "./model_cart.js";
import ViewCart from "./view_cart.js";

export default class ControllerCart{
    constructor(){
        this.model = new ModelCart();
        this.pub = new Publisher();
        this.view = new ViewCart();

        this.pub.subscribe('ON_BUY_CLICK', this.handleAddToCart);
        
         this.pub.subscribe('ON_BUY_CLICK', this.handleClickOpenModalCart);
    }

    handleAddToCart = product => {
        this.model.addToArrayForCart(product); // make array for cart, wich will be store in localStorage
        this.model.updateLocalStorage(); // update array in localStorage for cart
        this.model.addToSpanCart();
      }

      handleClickOpenModalCart = _ => {
        const data = this.model.getFromLocalStorage();
        console.log(data);
        this.view.renderCartModal(data);
        this.view.showModal();
        this.view.addLisSentInfOrder();
        // this.view.addListenersForDeleteButton();
        this.view.addListenersForCloseModalAndButtonClick();
      };
      habdelAddListenersForDeleteButton = () => {
        // this.view.addListenersForDeleteButton();
      };






    // handleClickOpenCart = data => {
    //     this.view.renderCart(data);
    //     this.view.showModal();
    //     this.view.addListenersForCloseModalAndButtonClick();
    // }

    // handleOpenCart = data => {
      //   console.log(data);
      //   this.view.renderCartt(data);
      // }

    
}