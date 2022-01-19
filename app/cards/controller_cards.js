import Publisher from "../publisher.js";
import ModelCards from "./model_cards.js";
import ViewCards from "./view_cards.js";

export default class ComtrollerCards {
  constructor() {
    this.model = new ModelCards();
    this.view = new ViewCards(this.handleClickLike);
    this.init();
    this.pub = new Publisher();
    this.pub.subscribe('ON_CLICK_SORT', this.handeSort);
  }

  init() {
    this.model.getData().then((d) => this.view.renderGames(d));
  }

  handeSort= sortType => {
    const data = this.model.getSortData(sortType);
    this.view.renderGames(data);    
  }

  handleClickLike = ev => {
    const id = this.view.getCardId(ev);
    this.pub.notify('LIKE', id);
  }
}

