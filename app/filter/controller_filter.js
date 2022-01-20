import Publisher from "../publisher.js";
import ViewFilter from "./view_filter.js";

export default class ControllerFilter{
    constructor(){
        this.pub = new Publisher();
        this.view = new ViewFilter();
        this.view.init();
    }

    handleClickFilter = ev => {
    }
}