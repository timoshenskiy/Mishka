var HIDE_CLASS = 'visually-hidden';
var NAVIGATION_CLOSE_CLASS = 'header__navigation--close';
var SEARCH_AND_CART_CLOSE_CLASS = 'header__search-cart-wrapper--close';
var MENU_BUTTON_CLOSE_CLASS = 'header__menu-button--close';


var navigation = document.querySelector('.header__navigation');
var searchAndCart = document.querySelector('.header__search-cart-wrapper');
var menuButton = document.querySelector('.header__menu-button');

menuButton.classList.remove(HIDE_CLASS);
navigation.classList.add(NAVIGATION_CLOSE_CLASS);
searchAndCart.classList.add(SEARCH_AND_CART_CLOSE_CLASS);
menuButton.classList.add(MENU_BUTTON_CLOSE_CLASS);

var menuButtonClickHandler = function () {
  navigation.classList.toggle(NAVIGATION_CLOSE_CLASS);
  searchAndCart.classList.toggle(SEARCH_AND_CART_CLOSE_CLASS);
  menuButton.classList.toggle(MENU_BUTTON_CLOSE_CLASS);
};

menuButton.addEventListener('click', menuButtonClickHandler);
