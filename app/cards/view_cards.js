export default class ViewCards {
  BODY_MAIN = document.querySelector("main");
  MAIN_WRAPPER = document.body.querySelector(".wrapper");

  constructor(handleProductInfoClick, handleProductBuyClick) {
    this.handleProductInfoClick = handleProductInfoClick;
    this.handleProductBuyClick = handleProductBuyClick;
    this.init();
    // this.BODY_MAIN.addEventListener('click', handleOpenModal);
  }

  init() {
    this.addEventListeners(this.handleProductInfoClick, ".btn-info");
    this.addEventListeners(this.handleProductBuyClick, ".btn-buy");
  }

  addEventListeners(listener,selector) {
    document
      .querySelectorAll(selector)
      .forEach((button) => button.addEventListener("click", listener));
  }

  renderGames(games) {
    this.MAIN_WRAPPER.innerHTML = "";
    this.MAIN_WRAPPER.insertAdjacentHTML(
      "beforeend",
      games.map(this.getGamesHTML).join("")
    );
    this.init();
  }

  getGamesHTML({
    id,
    name,
    image,
    price,
    aprice,
    genre,
    platforms,
    amount,
    release,
    description,
    age_rating,
  }) {
    return `<div class="card product m-2 game-id border border-secondary rounded-3" style="width: 18rem" data-id="${id}">
                <img src="${image}" referrerpolicy="no-referrer" class="card-img-top rounded-3" alt="Logo for ${name}" />
                <div class="card-body">
                    <h5 class="card-title fw-bold"">${name}</h5>
                    <p class="card-text">${release} - ${genre}</p>
                    <p class="card-text hidden-p">${platforms}</p>
                    <p class="card-text">Age rating : ${age_rating}+ years.</p>
                    <p class="card-text">In stock : ${amount}</p>
                    <p class="card-text fw-bold"">New price: ${aprice} UAH (<s>${price} UAH</s>)</p>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-info btn-secondary" data-id="${id}">Game description</button>
                    <button type="button" class="btn btn-buy btn-primary" data-id="${id}">Buy now</button>
                </div>
            </div>`;
  }
  // <button type="button" class="btn btn-success">Like</button>
  //TODO move to controller ?
//   getCardId = (ev) => ev.target.closest(".game-id").dataset.id;
}
