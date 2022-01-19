import ComtrollerCards from "./cards/controller_cards.js";
import ControllerLikometr from "./likometr/controller_likometr.js";
import ControllerSort from "./sort/controller_sort.js";
const controllerCards = new ComtrollerCards();
const controllerSort = new ControllerSort(controllerCards.handeSort);
const controllerLikometr = new ControllerLikometr();

