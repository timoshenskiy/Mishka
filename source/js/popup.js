var HIDE_CLASS = 'visually-hidden';
var SHOW_CLASS = 'popup-show';
var CART_POPUP_SELECTOR = '.cart-popup';
var CART_POPUP_WRAPPER_SELECTOR = '.cart-popup__wrapper';
var CART_POPUP_CONTROLS_SELECTOR = '.size-controls__radio';
var ORDER_BUTTON_SELECTOR = '.order-js';

var cartPopup = document.querySelector(CART_POPUP_SELECTOR);
var cartPopupWrapper = document.querySelector(CART_POPUP_WRAPPER_SELECTOR);
var orderButtons = document.querySelectorAll(ORDER_BUTTON_SELECTOR);
var cartPopupControls = document.querySelectorAll(CART_POPUP_CONTROLS_SELECTOR);

if (orderButtons) {
  for (var i = 0; i < orderButtons.length; i++) {
    orderButtons[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      cartPopup.classList.remove(HIDE_CLASS);
      cartPopupWrapper.classList.add(SHOW_CLASS);

      for (var j = 0; j < cartPopupControls.length; j++) {
        cartPopupControls[j].setAttribute("tabindex", 0);
      }
      cartPopupControls[0].focus();
    });
  }
}
