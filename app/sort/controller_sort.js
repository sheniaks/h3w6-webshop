import Publisher from "../publisher.js";
import ViewSort from "./view_sort.js";

export default class ControllerSort{
    constructor(handeSortByControllerCards){
        this.view = new ViewSort(this.handleClickBtnSort);
        this.handeSortByControllerCards = handeSortByControllerCards;
    
        this.view.init();
        this.pub = new Publisher();
    }

    handleClickBtnSort = ev => {
        const sortType = ev.srcElement.dataset.btn;
        this.pub.notify('ON_CLICK_SORT', sortType)
       // this.handeSortByControllerCards(sortType);
    }
}