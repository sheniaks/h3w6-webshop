import ModelCards from "./model_cards.js";
import ViewCards from "./view_cards.js";

export default class ComtrollerCards {
  constructor() {
    this.model = new ModelCards();
    this.view = new ViewCards();
    this.init();
  }

  init() {
    this.model.getData().then((d) => this.view.renderGames(d));
  }
}
