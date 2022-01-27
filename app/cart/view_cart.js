export default class ViewCart {
  constructor() {}
  renderCartModal = obj => {
    const refs = this.getRefs();
    let html = '';

    for (let i = 0; i < obj.length; i++) {
      let numer = i + 1;
      html += ` <tr data-id="${obj[i].id}" class="cart-item">
                        <th scope="row">${numer}</th>
                        <td><img src="${obj[i].image}" width="40"></img></td>
                        <td>${obj[i].name}</td>
                        <td>${obj[i].aprice}</td>
                        <td> <input class="input-count-items-in-cart" type="number" min="1" max="100" step="1" data-id="${obj[i].id}"  value="${obj[i].count}"></td>
                        <td>${obj[i].aprice*obj[i].count}</td>
                        <td> <button type="button" class="btn btn-danger btn-delete-from-cart" data-id="${obj[i].id}">×</button></td>
                    </tr>`;
    }
    const markup = `
        <div id="modal-card" class="modal-card" >
        <button type='button' class='modal-close'>×</button>
        <h2>Your order:</h2>
        <table id="cartTable"  class="table">
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col"></th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Count</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody id="tBodyIdCart">
            ${html}
            </tbody>
            

        </table>
                <form id="formMakeOrder" class='form-info' novalidate>
                    <label for="nmailInput" class="form-label">Your Mail</label>
                    <input type="text" class="form-control info-input info-input-email" id="EmailInput"  name="cliEmail">
                    <label for="nameInput" class="form-label" >Your Name</label>
                    <input type="text" class="form-control info-input info-input-name" id="nameInput" name="cliName" >
                    <label for="numnerPhoneInput" class="form-label">Your Phone Number</label>
                    <input type="text" class="form-control info-input info-input-phone" id="numnerPhoneInput" name="cliPhone" >
                    <div class="d-grid gap-2 pt-3">
                      <button type="submit" class="btn btn-success me-md-2 " id="btnMakeOrder">Make order</button>
                    </div>
                </form>
        </div>`;
    refs.BACKDROP_REF.innerHTML = '';
    refs.BACKDROP_REF.insertAdjacentHTML('afterbegin', markup);
  };
 
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

  addLisSentInfOrder = () => {
    // console.log('находит кнопку при рендере');
    const btn = document.querySelector('#btnMakeOrder');
    btn.addEventListener('click', ev => {
      this.pub.notify('ADD_LIS_BTN_MAKE_ORDER', ev);
    });
  };
}