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
    this.pub.subscribe('ON_CLICK_FILTER_SELECT', this.handleFilterSelect);
    this.pub.subscribe('ON_CLICK_FILTER_CHECKBOX', this.handleFilterCheckbox);
  }

  init() {
    this.model.getData().then((d) => this.view.renderGames(d));
  }

  handleFilterCheckbox = filterCheckboxType => {
    const data = this.model.getFilterCheckboxData(filterCheckboxType);
    this.view.renderGames(data);   
  }

  handleFilterSelect = filterSelectType => {
    const data = this.model.getFilterSelectData(filterSelectType);
    this.view.renderGames(data);   
  }
  handeSort= sortType => {
    const data = this.model.getSortData(sortType);
    this.view.renderGames(data);    
  }


  // handleClickLike = ev => {
  //   const id = this.view.getCardId(ev);
  //   this.pub.notify('LIKE', id);
  // }
}

