var HIDE_CLASS = "visually-hidden";

var NAVIGATION = document.querySelector(".header__navigation");
var NAVIGATION_CLOSE_CLASS = "header__navigation--close";

var SEARCH_AND_CART = document.querySelector(".header__search-cart-wrapper");
var SEARCH_AND_CART_CLOSE_CLASS = "header__search-cart-wrapper--close";

var MENU_BUTTON = document.querySelector(".header__menu-button");
MENU_BUTTON.classList.remove(HIDE_CLASS);
var MENU_BUTTON_CLOSE_CLASS = "header__menu-button--close";

NAVIGATION.classList.add(NAVIGATION_CLOSE_CLASS);
SEARCH_AND_CART.classList.add(SEARCH_AND_CART_CLOSE_CLASS);
MENU_BUTTON.classList.add(MENU_BUTTON_CLOSE_CLASS);

var menuButtonClickHandler = function () {
  NAVIGATION.classList.toggle(NAVIGATION_CLOSE_CLASS);
  SEARCH_AND_CART.classList.toggle(SEARCH_AND_CART_CLOSE_CLASS);
  MENU_BUTTON.classList.toggle(MENU_BUTTON_CLOSE_CLASS);
}

MENU_BUTTON.addEventListener("click", menuButtonClickHandler)
