import Publisher from "../publisher.js";
import ViewSort from "./view_sort.js";

export default class ControllerSort {
    constructor(handleSortByControllerCards) {
        this.view = new ViewSort(this.handleClickFormSelect, this.hendleClickBtnSort);
        this.habndleSortByControllerCards = handleSortByControllerCards;

        this.view.init();

        this.pub = new Publisher();
    }

    handleClickFormSelect = e => {
        const sortType = e.target.value;
        this.pub.notify('ON_CLICK_SORT', sortType);
    }
}