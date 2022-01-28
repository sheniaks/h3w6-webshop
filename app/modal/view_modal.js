import Publisher from "../publisher.js";

export default class ViewModal {
  MAIN_REF = document.querySelector("main");
  BACKDROP_REF = document.querySelector(".backdrop");

  constructor() {
    this.renderBackdrop();
    this.pub = new Publisher();
    // this.data = JSON.parse(localStorage.getItem('games')) || [];
  }

  renderBackdrop() {
    const markup = `<div class='backdrop is-hidden'></div>`;
    this.MAIN_REF.insertAdjacentHTML("beforeend", markup);
  }

  renderModal({
    name,
    image,
    price,
    aprice,
    genre,
    platforms,
    release,
    description,
    age_rating,
    isInCart,
    id,
  }) {
    const refs = this.getRefs();
    const markup = `<div id="modal-card" class="modal-card card m-2" style="width: 18rem;">
                          <button type='button' class='modal-close'>×</button>
                          <h4 class="card-title fw-bold"">${name}</h4>
                          <img src="${image}" alt="${name}" class="modal-img" referrerpolicy="no-referrer"/>
                          <div class="descr--wrapper">
                            <p class="modal-descr">${description}</p>
                            <p class="card-text">${release} - ${genre}</p>
                            <p class="card-text hidden-p">${platforms}</p>
                            <p class="card-text">Age rating: ${age_rating}+ years.</p>
                          </div>                  
                          <div class="modal-order">
                          <p class="card-text fw-bold new--p">New price: <span class="new--price">${aprice} UAH</span> (<s>${price} UAH</s>)</p>
                          <button type="button" class="btn btn-buy btn-primary card-button" data-id="${id}">Buy now</button>
                          </div>
                      </div>`;
    refs.BACKDROP_REF.innerHTML = "";
    refs.BACKDROP_REF.insertAdjacentHTML("afterbegin", markup);
  }

  showModal() {
    document.querySelector(".backdrop").classList.remove("is-hidden");
    document.body.style.overflow = "hidden";
  }

  addListenersForCloseModalAndButtonClick() {
    const refs = this.getRefs();
    refs.BUTTON_CLOSE_REF.addEventListener("click", this.handleClick);
    window.addEventListener("keydown", this.handleClick);
    refs.BACKDROP_REF.addEventListener("click", this.handleClick);
  }

  handleClick = (event) => {
    const refs = this.getRefs();
    const { target, key } = event;
    if (
      target === refs.BACKDROP_REF ||
      target === refs.BUTTON_CLOSE_REF ||
      key === "Escape"
    ) {
      refs.BACKDROP_REF.classList.add("is-hidden");
      refs.BODY_REF.style.overflow = "";
      refs.BACKDROP_REF.removeEventListener("click", this.handleClick);
      refs.BUTTON_CLOSE_REF.removeEventListener("click", this.handleClick);
      window.removeEventListener("keydown", this.handleClick);
    } else if (target.nodeName === "BUTTON") {
      this.pub.notify("ON_BUY_MODAL_CLICK", event);
    }
  };

  getRefs() {
    const refs = {
      BUTTON_CLOSE_REF: document.querySelector(".modal-close"),
      BACKDROP_REF: document.querySelector(".backdrop"),
      BODY_REF: document.body,
    };
    return refs;
  }
}
