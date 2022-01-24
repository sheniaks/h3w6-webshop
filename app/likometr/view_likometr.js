export default class ViewLikometr {
    HEADER_SORT_BTNS = document.body.querySelector('.sort--btns');

    constructor() {
        const htmlStr = `<div class="progress likes"></div>`;
        this.HEADER_SORT_BTNS.insertAdjacentHTML('beforeend', htmlStr);
        this.PROGRESS_LIKES = this.HEADER_SORT_BTNS.querySelector('.progress.likes');
    }

    render = count => {
        const htmlStr = `
                <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: ${count}%" aria-valuenow="${count}" aria-valuemin="0" aria-valuemax="100">${count}</div>
            `;
        this.PROGRESS_LIKES.innerHTML = '';
        this.PROGRESS_LIKES.insertAdjacentHTML('beforeend', htmlStr);
    }
}