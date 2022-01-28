import Publisher from "../publisher.js";

export default class ViewCart {
  constructor(handleDeleteItemFromCart, handleUpdateCounterCart) {
    this.handleDeleteItemFromCart = handleDeleteItemFromCart;
    this.handleUpdateCounterCart = handleUpdateCounterCart;
    this.pub = new Publisher();
  }
  renderCartModal = (obj) => {
    const refs = this.getRefs();
    let cartItem = "";
    let priceTotal = 0;
    if (obj) {
      for (let i = 0; i < obj.length; i++) {
        let number = i + 1;
        cartItem += ` <tr data-id="${obj[i].id}" class="cart-item">
                        <th scope="row">${number}</th>
                        <td><img src="${obj[i].image}" width="40"></img></td>
                        <td>${obj[i].name}</td>
                        <td>${obj[i].aprice}</td>
                        <td> <input class="input-count-items-in-cart" type="number" min="1" max="100" step="1" data-id="${
                          obj[i].id
                        }"  value="${obj[i].count}"></td>
                        <td>${obj[i].aprice * obj[i].count}</td>
                        <td> <button type="button" class="btn btn-danger btn-delete-from-cart" data-id="${
                          obj[i].id
                        }">×</button></td>
                    </tr>`;
        priceTotal += obj[i].aprice * obj[i].count;
      }
    }
    const markup = `
        <div id="modal-card" class="modal-card" >
        <button type='button' class='modal-close'>×</button>
        <div class='bodyCard'>
        <h5>Your order:</h5>
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
            ${cartItem}
            </tbody>
        </table>
                <form id="formMakeOrder" class='form-info' novalidate>
                <h5 align="right">Total order value : <span class="total-price text-success">${priceTotal} UAH</span></h5>
                    <label for="nmailInput" class="form-label">Your Mail</label>
                    <input type="text" class="form-control info-input info-input-email" id="EmailInput"  name="cliEmail">
                    <label for="nameInput" class="form-label" >Your Name</label>
                    <input type="text" class="form-control info-input info-input-name" id="nameInput" name="cliName" >
                    <label for="numnerPhoneInput" class="form-label">Your Phone Number</label>
                    <input type="text" class="form-control info-input info-input-phone" id="numnerPhoneInput" name="cliPhone" >
                    <div class="d-grid gap-2 pt-3">
                      <button type="button" class="btn btn-success me-md-2 " id="orderNow">Order now</button>
                      </div>
                </form>
        </div>
        </div>`;
    //
    refs.BACKDROP_REF.innerHTML = "";
    refs.BACKDROP_REF.insertAdjacentHTML("afterbegin", markup);
    let counterField = document.querySelectorAll(".input-count-items-in-cart");
    counterField.forEach((el) =>
      el.addEventListener("change", () => this.handleUpdateCounterCart(el))
    );
    let btnDeleteFromCart = document.querySelectorAll(".btn-delete-from-cart");
    btnDeleteFromCart.forEach((el) =>
      el.addEventListener("click", () =>
        this.handleDeleteItemFromCart(el.dataset.id)
      )
    );
  };

  renderOrderRecievedModal = () => {
    const bodyCart = document.querySelector(".bodyCard");
    const html =
      "<h3>Thank you for your order! Have a nice day! We'll contact you soon!</h3>";
    bodyCart.innerHTML = html;
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

  addListenerBtnOrderNow = () => {
    const btnOrderNow = document.querySelector("#orderNow");
    btnOrderNow.addEventListener("click", (ev) => {
      this.pub.notify("ON_ORDER_NOW_CLICK", ev);
    });
  };

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

  static validateEmail(email) {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  static validateCountry(country) {
    let re = new RegExp(".co$");
    return re.test(String(country).toLowerCase());
  }
  static validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
  }
}
