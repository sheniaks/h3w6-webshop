import Publisher from "../publisher.js";
import ViewFilter from "./view_filter.js";

export default class ControllerFilter {
  constructor() {
    this.pub = new Publisher();
    this.view = new ViewFilter(
      this.handleClickFilterSelect,
      this.handleClickFilterCheckbox
    );
    this.view.init();
  }

  handleClickFilterSelect = (ev) => {
    const filterSelectType = ev.target.value;
    console.log(ev.target.value);
    this.pub.notify("ON_CLICK_FILTER_SELECT", filterSelectType);
  };

  handleClickFilterCheckbox = (ev) => {
    let checkboxes = document.querySelectorAll('input[name="genre"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
    });
    // console.log(values);
    const filterCheckboxType = values.join(" ");
    console.log(filterCheckboxType);
    this.pub.notify("ON_CLICK_FILTER_CHECKBOX", filterCheckboxType);
  };
}
