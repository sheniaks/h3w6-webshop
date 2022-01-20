export default class ViewSort {
    HEADER_SORT_BTNS = document.body.querySelector('.sort--btns');
    BTN_SORT_SELECTOR = '.btn--sort';
    FORM_SELECT = '.form--select';

    constructor(handleClickFormSelect) {
        this.handleClickFormSelect = handleClickFormSelect;
    }

    init() {
        this.renderSelectForm();
        this.addListener(this.handleClickFormSelect);
    }

    addListener(listener){
        document.querySelector(this.FORM_SELECT).addEventListener("change", listener);
    }

    renderSelectForm() {
        const selectForm =`
            <select class="form--select" aria-label="Sort by select form">
                <option selected>Sort by:</option>
                <option value="sort_price_up">Price: lowest first</option>
                <option value="sort_price_dn">Price: highest first</option>
                <option value="sort_release_up">Release Old</option>
                <option value="sort_release_dn">Release New</option>
                <option value="sort_age_up">Age Rating: lowest first</option>
                <option value="sort_age_dn">Age rating: highest first</option>
            </select>`;
        this.HEADER_SORT_BTNS.insertAdjacentHTML("afterbegin", selectForm);
    }
}