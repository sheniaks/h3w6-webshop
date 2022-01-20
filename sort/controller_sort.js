import Publisher from "../components/publisher.js";
import ViewSort from "./view_sort.js";

export default class ControllerSort {
    constructor(habdleSortByControllerCards) {
        this.view = new ViewSort(this.hendleClickBtnSort);
        this.habdleSortByControllerCards = habdleSortByControllerCards;

        this.view.init();

        this.pub = new Publisher();
    }

    hendleClickBtnSort = e => {
        const sortType = e.srcElement.dataset.btn;
        this.pub.notify('ON_CLICK_SORT', sortType);
    }
}