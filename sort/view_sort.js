export default class ViewSort {
    HEADER_SORT_BTNS = document.body.querySelector('.sort--btns');
    BTN_SORT_SELECTOR = '.btn--sort';

    constructor(hendleClickBtnSort) {
        this.hendleClickBtnSort = hendleClickBtnSort;
    }

    init() {
        this.renderButtons();
        this.addListeners(this.hendleClickBtnSort);
    }

    addListeners(listener) {
        [...document.querySelectorAll(this.BTN_SORT_SELECTOR)]
            .forEach(btn => btn.addEventListener('click', listener));
    }

    renderButtons() {
        const buttonsStr = `
            <button type="button" class="btn btn-info btn--sort" data-btn='sort_up'>Sort Up</button>
            <button type="button" class="btn btn-info btn--sort" data-btn='sort_dn'>Sort Dn</button>`;

        this.HEADER_SORT_BTNS.insertAdjacentHTML('afterbegin', buttonsStr);
    }
}