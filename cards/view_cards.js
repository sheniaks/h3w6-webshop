export default class ViewCards {
  BODY_MAIN = document.querySelector("main");

  renderGames(games) {
    this.BODY_MAIN.insertAdjacentHTML(
      "beforeend",
      games.map(this.getGamesHTML).join("")
    );
  }

  getGamesHTML({ name, image, price, aprice, genre, platforms, amount, release }) {
    return `<div class="card m-2 border border-secondary rounded-3" style="width: 18rem">
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
                </div>
            </div>`;
  }
}
