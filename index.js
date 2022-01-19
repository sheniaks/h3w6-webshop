import ControllerCards from "./components/cards/controller_cards.js";
import ControllerSort from "./sort/controller_sort.js";

const controllerCards = new ControllerCards();
const controllerSort = new ControllerSort(controllerCards.handleSort.bind(controllerCards));

// const URL_SHEET = 'https://docs.google.com/spreadsheets/d/1Wc-F9Qa3a2giE4cVbbJgTaTQAdaHVX7kdCujcG0_ppY/pub?output=tsv';
// const BODY_MAIN = document.body.querySelector('main');

// fetch(URL_SHEET)
// 	.then(response => response.text())
// 	.then(data => {
//        parseSheet(data);
//     });

// const parseSheet = tsv => {
//     const d = tsv.split('\r\n').map(line => line.split('\t'));
//     const keys = d.shift();
//     const data = d.map(arr => arr.reduce((obj, prop, i) => {
//         obj[keys[i]] = prop;
//         return obj;
//     }, {}));
//     renderCards(data);
// }

// const renderCards = cards => {
//     BODY_MAIN.insertAdjacentHTML('beforeend', cards.map(getCardHTML).join(''));
// };

// const getCardHTML = ({id, name, image, price}) => {
//     return  `<div id="${id}" class="card m-2" style="width: 18rem;">
//                 <img src="${image}" class="card-img-top" alt="${name}" referrerpolicy="no-referrer">
//                 <div class="card-body">
//                     <h5 class="card-title">${name}</h5>
//                     <p class="card-text">Price: ${price} ₴</p>
//                     <a href="#" class="btn btn-primary">Bay now</a>
//                 </div>
//             </div>`
// };
    