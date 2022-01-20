import Publisher from "../publisher.js";
import ModelCards from "./model_cards.js";
import ViewCards from "./view_cards.js";

export default class ControllerCards {
    constructor() {
        this.model = new ModelCards();
        this.view = new ViewCards(this.handleClickLike);

        this.init();

        this.pub = new Publisher();

        this.pub.subscribe('ON_CLICK_SORT', this.handleSort);
    }

    init() {
        this.model.getData().then(data => this.view.renderCards(data));
    }   

    handleSort = sortType => {
        const data = this.model.getSortData(sortType);
        this.view.renderCards(data);
    }

    handleClickLike = e => {
        const id = this.view.getCardId(e);
        this.pub.notify('LIKE', id);
    }
}