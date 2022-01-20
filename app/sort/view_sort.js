export default class ViewSort {
  BODY_HEADER = document.querySelector("header");
  BTN_SORT_SELECTOR = ".btn--sort";
  FORM_SELECT = ".form-select"

  constructor(handleClickFormSelect) {
    // this.handleClickBtnSort = handleClickBtnSort;
    this.handleClickFormSelect = handleClickFormSelect;
  }

  init() {
    // this.renderButtons();
    // this.addListeners(this.handleClickBtnSort);
    this.renderSelectForm();
    this.addListener(this.handleClickFormSelect);
  }

  addListener(listener){
      document.querySelector(this.FORM_SELECT).addEventListener("change", listener);
    }


  // addListeners(listener) {
  //   [...document.querySelectorAll(this.BTN_SORT_SELECTOR)]
  //       .forEach((btn) =>btn.addEventListener("click", listener));
  // }

  // renderButtons() {
  //   const buttonsStr = `
  //       <button type="button" class="btn btn-info btn--sort" data-btn="sort_price_up">Sort price up</button>
  //       <button type="button" class="btn btn-info btn--sort" data-btn="sort_price_dn">Sort price down</button>
  //       <button type="button" class="btn btn-info btn--sort" data-btn="sort_release_up">Sort release old</button>
  //       <button type="button" class="btn btn-info btn--sort" data-btn="sort_release_dn">Sort release new</button>
  //       <button type="button" class="btn btn-info btn--sort" data-btn="sort_age_up">Sort age rating lowest</button>
  //       <button type="button" class="btn btn-info btn--sort" data-btn="sort_age_dn">Sort age rating highest</button>
  //       `;
  //   this.BODY_HEADER.insertAdjacentHTML("afterbegin", buttonsStr);
  // }

  renderSelectForm() {
    const selectForm =`<select class="form-select" aria-label="Sort by select form">
    <option selected>Sort by:</option>
    <option value="sort_a_z">Name A-Z</option>
    <option value="sort_z_a">Name Z-A</option>
    <option value="sort_price_up">Price Lowest</option>
    <option value="sort_price_dn">Price Highest</option>
    <option value="sort_age_up">Age Rating Lowest</option>
    <option value="sort_age_dn">Age Rating Highest</option>
    <option value="sort_release_up">Release Date Oldest</option>
    <option value="sort_release_dn">Release Date Newest</option>

  </select>`;
    this.BODY_HEADER.insertAdjacentHTML("afterbegin", selectForm);
  }

}
