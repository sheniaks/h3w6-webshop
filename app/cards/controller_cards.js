import Publisher from "../publisher.js";
import ModelCards from "./model_cards.js";
import ViewCards from "./view_cards.js";

export default class ComtrollerCards {
  constructor() {
    this.model = new ModelCards();
    this.view = new ViewCards(
      this.handleProductInfoClick,
      this.handleProductBuyClick
    );
    this.init();
    this.pub = new Publisher();
    this.pub.subscribe("ON_CLICK_SORT", this.handeSort);
    this.pub.subscribe("ON_CLICK_FILTER_SELECT", this.handleFilterSelect);
    this.pub.subscribe("ON_CLICK_FILTER_CHECKBOX", this.handleFilterCheckbox);
    this.pub.subscribe("ON_CHANGE_SEARCH", this.handeSearch);
    this.pub.subscribe("ON_BUY_MODAL_CLICK", this.handeBuyModalClick);
  }

  init() {
    this.model
      .getData()
      .then((d) => this.view.renderGames(d));
  }

  handleFilterCheckbox = (filterCheckboxType) => {
    const data = this.model.getFilterCheckboxData(filterCheckboxType);
    this.view.renderGames(data);
  };

  handeSearch = (searchVal) => {
    const data = this.model.getSearchData(searchVal);
    this.view.renderGames(data);
  };

  handleFilterSelect = (filterSelectType) => {
    const data = this.model.getFilterSelectData(filterSelectType);
    this.view.renderGames(data);
  };

  handeSort = (sortType) => {
    const data = this.model.getSortData(sortType);
    this.view.renderGames(data);
  };

  handleProductInfoClick = (event) => {
    const button = event.target;
    const id = button.dataset.id;
    const objectForModal = this.model.getObjForModalById(id);
    this.pub.notify("ON_INFO_CLICK", objectForModal);
  };

  handleProductBuyClick = (event) => {
    const button = event.target;
    const id = button.dataset.id;
    const product =  this.model.getObjForModalById(id);
    this.pub.notify("ON_BUY_CLICK", product);
  };

  handeBuyModalClick = (event) => {
    const button = event.target;
    const id = button.dataset.id;
    const product =  this.model.getObjForModalById(id);
    this.pub.notify("ON_BUY_CLICK", product);
  };





  
// handleOpenModal = (event) => {
  //   event.preventDefault();
  //   if (event.target === event.currentTarget) {
  //     return;
  //   }
  //   const objectForModal = this.model.getObjForModalById(event);
  //   this.pub.notify("ON_MODAL_CLICK", objectForModal);
  // };

  // handleClickLike = ev => {
  //   const id = this.view.getCardId(ev);
  //   this.pub.notify('LIKE', id);
  // }
}
