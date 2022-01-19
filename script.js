import ComtrollerCards from "./cards/controller_cards.js";
import ControllerSort from "./sort/controller_sort.js";
const controllerCards = new ComtrollerCards();
const controllerSort = new ControllerSort(controllerCards.handeSort.bind(controllerCards));


//const URL_GAMES = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRX-T20ZlEv-pJVqwWgmTC89368BK6XhYIfKgqeTewfNLpKeWgVxcw0azcxTIwyKNLtuF-YjfX61bE-/pub?output=tsv'; //M
//const BODY_MAIN = document.querySelector('main'); //V

// fetch (URL_GAMES) //M
//     .then (resp => resp.text())
//     .then (d => {
//         // console.log(d);
//         parseSheet(d);
//     });

// const parseSheet = tsv => { //M
//     const d = tsv.split('\r\n').map(line => line.split('\t'));
//     const keys = d.shift();
//     const data = d.map(arr => arr.reduce((obj,prop,i) => {
//         obj[keys[i]] = prop;
//         return obj;
//     }, {}));
//     // console.log(data);
//     renderGames(data);
// }

// const renderGames = games => {  //V
//     BODY_MAIN.insertAdjacentHTML('beforeend', games.map(getGamesHTML).join(''));
// }

// const getGamesHTML = ( {name, image, price, platforms, amount}) => { //V
//     return `<div class="card m-2 border border-secondary rounded-3" style="width: 18rem">
//                 <img src="${image}" referrerpolicy="no-referrer" class="card-img-top rounded-3" alt="Logo for ${name}" />
//                 <div class="card-body">
//                     <h5 class="card-title fw-bold"">${name}</h5>
//                     <p class="card-text hidden-p">Platforms: ${platforms}</p>
//                     <p class="card-text">Avaiable to buy : ${amount}</p>
//                     <p class="card-text fw-bold"">Price : ${price} UAH</p>
//                 </div>
//                 <div class="card-footer">
//                     <button type="button" class="btn btn-secondary">Game description</button>
//                     <button type="button" class="btn btn-primary">Buy now</button>
//                 </div>
//             </div>`;
// }
