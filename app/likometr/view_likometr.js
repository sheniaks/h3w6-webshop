export default class ViewLikometr{
    BODY_HEADER = document.querySelector("header");
    constructor(){
        const htmlStr = '<div class="progress likes"></div>';
        this.BODY_HEADER.insertAdjacentHTML('beforeend', htmlStr);
        this.PROGRESS_LIKES = this.BODY_HEADER.querySelector('.progress.likes');
    }
    
    render = count => {
        const htmlStr = `
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${count}%" aria-valuenow="${count}" aria-valuemin="0" aria-valuemax="100">${count}</div>
      `;
      this.PROGRESS_LIKES.innerHTML = '';
        this.BODY_HEADER.insertAdjacentHTML('beforeend', htmlStr);
    }
}