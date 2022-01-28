export default class ViewSearch {
  BODY_HEADER = document.querySelector("header");
  SEARCH_FORM = ".form-control";
  constructor(handleChangeSearch) {
    this.handleChangeSearch = handleChangeSearch;
  }

  init() {
    this.renderSearchForm();
    this.addListener(this.handleChangeSearch);
  }

  addListener(listener) {
    document
      .querySelector(this.SEARCH_FORM)
      .addEventListener("input", listener);
  }

  renderSearchForm() {
    const searchForm = `
            <div class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            </div>`;
    this.BODY_HEADER.insertAdjacentHTML("beforeend", searchForm);
  }
}
