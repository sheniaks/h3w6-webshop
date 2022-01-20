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
        <button type="button" class="btn btn-info btn--sort" data-btn="sort_price_up">Sort price up</button>
        <button type="button" class="btn btn-info btn--sort" data-btn="sort_price_dn">Sort price down</button>
        <button type="button" class="btn btn-info btn--sort" data-btn="sort_release_up">Sort year up</button>
        <button type="button" class="btn btn-info btn--sort" data-btn="sort_release_dn">Sort year down</button>
        <button type="button" class="btn btn-info btn--sort" data-btn="sort_age_up">Sort age up</button>
        <button type="button" class="btn btn-info btn--sort" data-btn="sort_age_dn">Sort age down</button>
        `;
    this.BODY_HEADER.insertAdjacentHTML("afterbegin", buttonsStr);
  }
}
