import Publisher from "../publisher.js";
import ModelCart from "./model_cart.js";
import ViewCart from "./view_cart.js";

export default class ControllerCart{
    constructor(){
        this.model = new ModelCart();
        this.pub = new Publisher();
        this.view = new ViewCart();

        this.pub.subscribe('ON_BUY_CLICK', this.handleClickOpenCart);
    }

    handleClickOpenCart = obj => {
        this.view.renderCart(obj);
        this.view.showModal();
        this.view.addListenersForCloseModalAndButtonClick();
    }
    
}