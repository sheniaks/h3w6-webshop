export default class ViewFilter {
  BODY_HEADER = document.querySelector("header");
  FORM_RADIO = 'input[name="flexRadioPlatform"]:checked';
  FORM_SELECT = ".form-select"
  constructor(handleClickFilter){
    this.handleClickFilter = handleClickFilter;
  }
  init() {
      this.renderFilterForm();
      (this.addListener(this.handleClickFilter));
  }

  addListener(listener){
    document.querySelector(this.FORM_SELECT).addEventListener("change", listener);
  }

  renderFilterForm() {
    // const filterForm = `
    // <div class="container">
    // Filter by Platform:
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="all" checked id="flexRadioDefault0">
    //         <label class="form-check-label" for="flexRadioDefault0">
    //             All platforms
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="android" id="flexRadioDefault1">
    //         <label class="form-check-label" for="flexRadioDefault1">
    //             Android
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="browser" id="flexRadioDefault2>
    //         <label class="form-check-label" for="flexRadioDefault2">
    //             Browser
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="ios" id="flexRadioDefault3">
    //         <label class="form-check-label" for="flexRadioDefault3">
    //             iOS
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="linux" id="flexRadioDefault4">
    //         <label class="form-check-label" for="flexRadioDefault4">
    //             Linux
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="macos" id="flexRadioDefault5">
    //         <label class="form-check-label" for="flexRadioDefault5">
    //              macOS
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="ms_windows " id="flexRadioDefault6">
    //         <label class="form-check-label" for="flexRadioDefault6">
    //             Microsoft Windows
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="nintendo" id="flexRadioDefault7">
    //         <label class="form-check-label" for="flexRadioDefault7">
    //             Nintendo Switch
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="ps3" id="flexRadioDefault8">
    //         <label class="form-check-label" for="flexRadioDefault8">
    //             PlayStation 3
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="ps4" id="flexRadioDefault9">
    //         <label class="form-check-label" for="flexRadioDefault9">
    //             PlayStation 4
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="ps5" id="flexRadioDefault10">
    //         <label class="form-check-label" for="flexRadioDefault10">
    //             PlayStation 5
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="xbox_360" id="flexRadioDefault11">
    //         <label class="form-check-label" for="flexRadioDefault11">
    //             Xbox 360
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="xbox_one" id="flexRadioDefault12">
    //         <label class="form-check-label" for="flexRadioDefault12">
    //             Xbox One
    //         </label>
    //     </div>
    //     <div class="form-check form-check-inline">
    //         <input class="form-check-input" type="radio" name="flexRadioPlatform" value="xbox_xs" id="flexRadioDefault13">
    //         <label class="form-check-label" for="flexRadioDefault13">
    //             Xbox Series X/S
    //         </label>
    //     </div>
    // </div>
    //     `;

    const filterForm = `<select class="form-select" aria-label="Sort by platform">
    <option selected>Choose your Platform:</option>
    <option value="all">All platforms</option>
    <option value="Android">Android</option>
    <option value="Browser">Browser</option>
    <option value="iOS">iOS</option>
    <option value="Linux">Linux</option>
    <option value="macOS">macOS</option>
    <option value="Microsoft Windows">Microsoft Windows</option>
    <option value="Nintendo Switch">Nintendo Switch</option>
    <option value="PlayStation 3">PlayStation 3</option>
    <option value="PlayStation 4">PlayStation 4</option>
    <option value="PlayStation 5">PlayStation 5</option>
    <option value="Xbox 360">Xbox 360</option>
    <option value="Xbox One">Xbox One</option>
    <option value="Xbox Series X/S">Xbox Series X/S</option>
  </select>`;
    this.BODY_HEADER.insertAdjacentHTML("afterbegin", filterForm);
  }
}
