var ESC_KEY = 27;

var HIDE_CLASS = 'cart-popup--close';
var SHOW_CLASS = 'cart-popup__wrapper--animated';
var CART_POPUP_SELECTOR = '.cart-popup';
var CART_POPUP_WRAPPER_SELECTOR = '.cart-popup__wrapper';
var CART_POPUP_CONTROLS_SELECTOR = '.size-controls__radio';
var CART_BUTTON_SELECTOR = '.catalog__button';
var ORDER_BUTTON_SELECTOR = '.week-offer__order-link';

var cartPopup = document.querySelector(CART_POPUP_SELECTOR);
var cartPopupWrapper = document.querySelector(CART_POPUP_WRAPPER_SELECTOR);

var orderButton = document.querySelector(ORDER_BUTTON_SELECTOR);
var cartButtons = document.querySelectorAll(CART_BUTTON_SELECTOR);

var controls = document.querySelector(CART_POPUP_CONTROLS_SELECTOR);

var closePopup = function () {
  cartPopup.classList.add(HIDE_CLASS);
  cartPopupWrapper.classList.remove(SHOW_CLASS);
  cartPopup.removeEventListener('click', cartBackgroundClickHandler)
  document.removeEventListener('keydown', escapeButtonKeydownHandler);
}

var openPopup = function () {
  cartPopup.classList.remove(HIDE_CLASS);
  cartPopupWrapper.classList.add(SHOW_CLASS);
  controls.focus();
  cartPopup.addEventListener('click', cartBackgroundClickHandler)
  document.addEventListener('keydown', escapeButtonKeydownHandler);
}

var orderButtonClickHandler = function (evt) {
  evt.preventDefault();
      openPopup();
}

var cartBackgroundClickHandler = function (evt) {
  if(cartPopup === evt.target) {
    closePopup();
  }
}

var escapeButtonKeydownHandler = function (evt) {
  if (evt.keyCode === ESC_KEY) {
    closePopup();
  }
}

/* index.html */
if (orderButton) {
    orderButton.addEventListener('click', orderButtonClickHandler);
};

/* catalog.html */
if (cartButtons) {
  for (var i = 0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener('click', orderButtonClickHandler);
  }
};
