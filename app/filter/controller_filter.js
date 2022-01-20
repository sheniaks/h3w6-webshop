import Publisher from "../publisher.js";
import ViewFilter from "./view_filter.js";

export default class ControllerFilter{
    constructor(){
        this.pub = new Publisher();
        this.view = new ViewFilter(this.handleClickFilter);
        this.view.init();
    }

    handleClickFilter = ev => {
        const filterType = ev.target.value;
        this.pub.notify('ON_CLICK_FILTER', filterType)
    }
}