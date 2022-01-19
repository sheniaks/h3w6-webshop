export default class ViewCards {
  BODY_MAIN = document.querySelector("main");

  constructor(handleClickLike) {
    this.handleClickLike = handleClickLike;
    this.BODY_MAIN.addEventListener('click', handleClickLike);
  }


  renderGames(games) {
    this.BODY_MAIN.innerHTML = '';
    this.BODY_MAIN.insertAdjacentHTML(
      "beforeend",
      games.map(this.getGamesHTML).join("")
    );
  }

  getGamesHTML({id,
    name,
    image,
    price,
    aprice,
    genre,
    platforms,
    amount,
    release,
    description
  }) {
    return `<div class="card m-2 game-id border border-secondary rounded-3" style="width: 18rem" data-id="${id}">
                <img src="${image}" referrerpolicy="no-referrer" class="card-img-top rounded-3" alt="Logo for ${name}" />
                <div class="card-body">
                    <h5 class="card-title fw-bold"">${name}</h5>
                    <p class="card-text">${release} - ${genre}</p>
                    <p class="card-text hidden-p">${platforms}</p>
                    <p class="card-text">In stock : ${amount}</p>
                    <p class="card-text fw-bold"">New price: ${aprice} UAH (<s>${price} UAH</s>)</p>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-secondary">Game description</button>
                    <button type="button" class="btn btn-primary">Buy now</button>
                    <button type="button" class="btn btn-success">Like</button>
                </div>
            </div>`;
  }
//TODO move to controller ?
  getCardId = ev => ev.target.closest('.game-id').dataset.id;
  
}
