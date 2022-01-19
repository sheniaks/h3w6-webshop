import ViewSort from "./view_sort.js";

export default class ControllerSort {
    constructor(habdleSortByControllerCards) {
        this.view = new ViewSort(this.hendleClickBtnSort.bind(this));
        this.habdleSortByControllerCards = habdleSortByControllerCards;

        this.view.init();
    }

    hendleClickBtnSort(e) {
        const sortType = e.srcElement.dataset.btn;
        this.habdleSortByControllerCards(sortType);
    }
}