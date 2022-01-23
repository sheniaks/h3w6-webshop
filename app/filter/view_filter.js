export default class ViewFilter {
  BODY_HEADER = document.querySelector("header");
  BODY_ASIDE = document.querySelector("aside");
  FORM_CHECK = '.form-check-input';
  FORM_SELECT = ".form-select";
  constructor(handleClickFilterSelect, handleClickFilterCheckbox) {
    this.handleClickFilterSelect = handleClickFilterSelect;
    this.handleClickFilterCheckbox= handleClickFilterCheckbox;
  }
  init() {
    this.renderFilterForm();
    this.addListenerSelect(this.handleClickFilterSelect);
    this.addListeners(this.handleClickFilterCheckbox);
  }

  addListenerSelect(listener) {
    document
      .querySelector(this.FORM_SELECT)
      .addEventListener("change", listener);
  }

//    addListeners(listener2) {
//     [...document.querySelectorAll(this.FORM_CHECK)]
//         .forEach((checkbox) => checkbox.addEventListener("click", listener2));   
//   }

addListeners(listener2) {
    document.querySelector('.btn').addEventListener("click", listener2 ); 
    //console.log(listener2);  
      }



  renderFilterForm() {
    const filterFormPlatform = `
        <select class="form-select" aria-label="Sort by platform">
            <option value="all" selected>Choose your Platform:</option>
            <option value="all">All platforms</option>
            <option value="Android">Android</option>
            <option value="Browser">Browser</option>
            <option value="iOS">iOS</option>
            <option value="Linux">Linux</option>
            <option value="macOS">macOS</option>
            <option value="Microsoft Windows">Microsoft Windows</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="PlayStation 3">PlayStation 3</option>
            <option value="PlayStation 4">PlayStation 4</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="Xbox 360">Xbox 360</option>
            <option value="Xbox One">Xbox One</option>
            <option value="Xbox Series X/S">Xbox Series X/S</option>
        </select>`;
    const filterFormGenre = `
        <div class="form-check">
            <input class="form-check-input" name="genre" type="checkbox" value="all" id="flexCheckChecked" >
            <label class="form-check-label" for="flexCheckChecked">
                All genres
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="action" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Action
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="adventure" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Adventure
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="battle royale" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Battle Royale
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="card" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Card
            </label>
        </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="fantasy" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Fantasy
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="MMORPG" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                MMORPG
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="sandbox" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Sandbox
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="shooter" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Shooter
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="simulator" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Simulator
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="sports" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Sports
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="strategy" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Strategy
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="survival" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Survival
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="genre" type="checkbox" value="RPG" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                RPG
            </label>
        </div>
        <button class="btn btn-primary filter-genres" >FILTER BY GENRE</button>`;

    
    this.BODY_ASIDE.insertAdjacentHTML("afterbegin", filterFormGenre);
    this.BODY_HEADER.insertAdjacentHTML("afterbegin", filterFormPlatform);
  }
}
