import Publisher from "../publisher.js";
import ViewSearch from "./view_search.js";

export default class ControllerSearch {
  constructor() {
    this.pub = new Publisher();
    this.view = new ViewSearch(this.handleChangeSearch);
    this.view.init();
  }

  handleChangeSearch = (ev) => {
    const searchVal = ev.target.value;
    this.pub.notify("ON_CHANGE_SEARCH", searchVal);
  };
}
