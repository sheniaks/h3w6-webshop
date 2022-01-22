export default class ViewCards {
    BODY_MAIN = document.body.querySelector('main');
    MAIN_WRAPPER = document.body.querySelector('.wrapper');

    constructor(handleClickLike, handleOpenModal) {
        this.BODY_MAIN.addEventListener('click', handleClickLike);
        this.BODY_MAIN.addEventListener('click', handleOpenModal);
        // document.querySelector('.row').addEventListener('click', handleOpenModal);
    }

    renderCards(cards) {
        this.MAIN_WRAPPER.innerHTML = '';
        this.MAIN_WRAPPER.insertAdjacentHTML('beforeend', cards.map(this.getCardHTML).join(''));
    };
    
    getCardHTML({id, name, image, price, aprice, genre, platforms, amount, release, description, age_rating }) {
        return  `<div id="${id}" class="card m-2 game--id" style="width: 18rem;">
                    <img src="${image}" class="card-img-top" alt="${name}" referrerpolicy="no-referrer">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${release} - ${genre}</p>
                        <p class="card-text hidden-p">${platforms}</p>
                        <p class="card-text">Age rating: ${age_rating}+ years.</p>
                        <p class="card-text">In stock: ${amount}</p>
                        <p class="card-text">Price: ${price} UAH</p>
                        <div class="for--btns--card">
                            <div>
                                <a href="#" class="btn btn-primary">Buy now</a>
                            </div>
                            <div>
                                <button class="btn btn-hart">
                                    <i class='fa fa-heart'></i>
                                </button>
                                <span class="count--likes">13</span>
                            </div>
                        </div>
                    </div>
                </div>`
    };

    //TODO: Move to controller?
    getCardId = e => e.target.closest('.game--id')?.dataset.id;
}