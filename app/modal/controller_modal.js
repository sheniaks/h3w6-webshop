import Publisher from "../publisher.js";
import ViewModal from "./view_modal.js";

export default class ControllerModal {
    constructor() {
        this.view = new ViewModal();
        this.pub = new Publisher();

        this.pub.subscribe('ON_INFO_CLICK', this.handleClickOpenModal);
        // this.pub.subscribe('ON_BUY_CLICK', this.handleClickOpenCart);
    }

    handleClickOpenModal = obj => {
        this.view.renderModal(obj);
        this.view.showModal();
        this.view.addListenersForCloseModalAndButtonClick();
    };

    // handleClickOpenCart = obj => {
    //     this.view.renderCart(obj);
    //     this.view.showModal();
    //     this.view.addListenersForCloseModalAndButtonClick();
    // }
}