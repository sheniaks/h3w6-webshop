export default class ViewSort {
  BODY_HEADER = document.querySelector("header");
  BTN_SORT_SELECTOR = ".btn--sort";

  constructor(handleClickBtnSort) {
    this.handleClickBtnSort = handleClickBtnSort;
  }
  init() {
    this.renderButtons();
    this.addListeners(this.handleClickBtnSort);
  }

  addListeners(listener) {
    [...document.querySelectorAll(this.BTN_SORT_SELECTOR)]
        .forEach((btn) =>btn.addEventListener("click", listener));
  }

  renderButtons() {
    const buttonsStr = `
        <button type="button" class="btn btn-info btn--sort" data-btn="sort_up">Sort price up</button>
        <button type="button" class="btn btn-info btn--sort" data-btn="sort_dn">Sort price down</button>
        `;
    this.BODY_HEADER.insertAdjacentHTML("afterbegin", buttonsStr);
  }
}