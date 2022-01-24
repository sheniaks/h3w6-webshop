export default class ViewCards {
    BODY_MAIN = document.body.querySelector('main');
    MAIN_WRAPPER = document.body.querySelector('.wrapper');

    constructor(handleClickLike, handleOpenModal) {
        this.BODY_MAIN.addEventListener('click', handleClickLike);
        this.BODY_MAIN.addEventListener('click', handleOpenModal);
    }

    renderCards(cards) {
        this.MAIN_WRAPPER.innerHTML = '';
        this.MAIN_WRAPPER.insertAdjacentHTML('beforeend', cards.map(this.getCardHTML).join(''));
    };
    
    getCardHTML({id, name, image, price, aprice, genre, platforms, amount, release, description, age_rating }) {
        return  `<div id="${id}" class="card m-2 game--id" style="width: 18rem;">
                    <img src="${image}" class="card-img-top" alt="${name}" referrerpolicy="no-referrer">
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
                </div>`
    };

    //TODO: Move to controller?
    getCardId = e => e.target.closest('.game--id')?.dataset.id;
}