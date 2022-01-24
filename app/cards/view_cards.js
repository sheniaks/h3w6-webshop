export default class ViewCards {
  BODY_MAIN = document.querySelector("main");
  MAIN_WRAPPER = document.body.querySelector('.wrapper');

  constructor(handleClickLike, handleOpenModal) {
    this.handleClickLike = handleClickLike;
    this.BODY_MAIN.addEventListener("click", handleClickLike);
    this.BODY_MAIN.addEventListener('click', handleOpenModal);
  }

  renderGames(games) {
    this.MAIN_WRAPPER.innerHTML = "";
    this.MAIN_WRAPPER.insertAdjacentHTML(
      "beforeend",
      games.map(this.getGamesHTML).join("")
    );
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
    return `<div class="card m-2 game-id border border-secondary rounded-3" style="width: 18rem" data-id="${id}">
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
                    <button type="button" class="btn btn-secondary">Game description</button>
                    <button type="button" class="btn btn-primary">Buy now</button>
                </div>
            </div>`;
  }
  // <button type="button" class="btn btn-success">Like</button>
  //TODO move to controller ?
  getCardId = (ev) => ev.target.closest(".game-id").dataset.id;
}
