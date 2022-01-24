import Publisher from "../publisher.js";
import ViewSort from "./view_sort.js";

export default class ControllerSort {
  constructor() {
    this.pub = new Publisher();
    this.view = new ViewSort(this.handleClickFormSelect);
    this.view.init();
  }

  // handleClickBtnSort = ev => {
  //     const sortType = ev.srcElement.dataset.btn;
  //     this.pub.notify('ON_CLICK_SORT', sortType)
  //    // this.handeSortByControllerCards(sortType);
  // }

  handleClickFormSelect = (ev) => {
    const sortType = ev.target.value;
    this.pub.notify("ON_CLICK_SORT", sortType);
  };
}
