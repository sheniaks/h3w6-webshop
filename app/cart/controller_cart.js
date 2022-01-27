import Publisher from "../publisher.js";
import ModelCart from "./model_cart.js";
import ViewCart from "./view_cart.js";

export default class ControllerCart{
    constructor(){
        this.model = new ModelCart();
        this.pub = new Publisher();
        this.view = new ViewCart();

        this.pub.subscribe('ON_BUY_CLICK', this.handleAddToCart);
        
        // this.pub.subscribe('ON_BUY_CLICK', this.handleClickOpenCart);
    }

    handleAddToCart = product => {
        this.model.addToArrayForCart(product); // make array for cart, wich will be store in localStorage
        this.model.updateLocalStorage(); // update array in localStorage for cart
        this.model.addToSpanCart();
      }


      handleOpenCart = data => {
        console.log(data);
        this.view.renderCartt(data);
      }


    // handleClickOpenCart = product => {
    //     this.view.renderCart(product);
    //     this.view.showModal();
    //     this.view.addListenersForCloseModalAndButtonClick();
    // }
    
}