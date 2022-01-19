import ViewSort from "./view_sort.js";

export default class ControllerSort{
    constructor(handeSortByControllerCards){
        this.view = new ViewSort(this.handleClickBtnSort.bind(this));
        this.handeSortByControllerCards = handeSortByControllerCards;
    
        this.view.init();
    }

    handleClickBtnSort(ev){
        const sortType = ev.srcElement.dataset.btn;
        this.handeSortByControllerCards(sortType );
    }
}