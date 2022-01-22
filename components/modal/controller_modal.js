import Publisher from "../publisher.js";
import ViewModal from "./view_modal.js";

export default class ControllerModal {
    constructor() {
        this.view = new ViewModal();
        this.pub = new Publisher();

        this.pub.subscribe('ON_MODAL_CLICK', this.handleClickOpenModal);
    }

    handleClickOpenModal = obj => {
        this.view.renderModal(obj);
        this.view.showModal();
        this.view.addListenersForCloseModal();
    };
}