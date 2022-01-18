export default class ViewCards {
    BODY_MAIN = document.body.querySelector('main');

    renderCards(cards) {
        this.BODY_MAIN.insertAdjacentHTML('beforeend', cards.map(this.getCardHTML).join(''));
    };
    
    getCardHTML({id, name, image, price}) {
        return  `<div id="${id}" class="card m-2" style="width: 18rem;">
                    <img src="${image}" class="card-img-top" alt="${name}" referrerpolicy="no-referrer">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">Price: ${price} UAH</p>
                        <a href="#" class="btn btn-primary">Buy now</a>
                    </div>
                </div>`
    };
}