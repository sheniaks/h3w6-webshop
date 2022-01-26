export default class ViewCart {
  constructor() {}

  renderCart({ name, image, aprice, id }) {
    const refs = this.getRefs();
    // let total = 0;
    // let markup = `<div class="container">
    //             <div class="row">
    //                 <div class="col-5"><strong>Product</strong></div>
    //                 <div class="col-3"><strong>Price</strong></div>
    //                 <div class="col-2"><strong>Quantity</strong></div>
    //             </div>`;
    // for (const id in this.cart)
    const markup = `
   <div id="modal-card" class="modal-card card m-2" style="width: 36rem;">
      <button type='button' class='modal-close'>×</button>
      <div class="row">
        <div class="col-5"><strong>Product</strong></div>
        <div class="col-3"><strong>Price</strong></div>
        <div class="col-2"><strong>ID</strong></div>
      </div>

      <div class="row" data-id="${id}"> 
        <div class="col-5">${name}</div>
        <div class="col-3">${aprice}</div>
        <div class="col-2">${id}</div>
      </div>
    </div>`;
    refs.BACKDROP_REF.innerHTML = "";
    refs.BACKDROP_REF.insertAdjacentHTML("afterbegin", markup);
  }
  // /* <div class="col-2">${this.cart[id]}</div>
  //     <div class="col-1"><button data-id=${id} class="btn btn-sm plus">+</button></div>
  //     <div class="col-1"><button data-id=${id} class="btn btn-sm minus">-</button></div> */

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
      this.pub.notify("ON_MODAL_BUTTON_CLICK", event);
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
