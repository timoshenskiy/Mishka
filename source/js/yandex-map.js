var MAP_CONTAINER_SELECTOR = '.contacts__map';
var MAP_IMAGE_SELECTOR = '.contacts__image';
var MAP_MARK_SELECTOR = '.contacts__mark';

var HIDE_CLASS = 'visually-hidden';

document.querySelector(MAP_IMAGE_SELECTOR).classList.add(HIDE_CLASS);
document.querySelector(MAP_MARK_SELECTOR).classList.add(HIDE_CLASS);

ymaps.ready(function () {
  var myMap = new ymaps.Map(
      document.querySelector(MAP_CONTAINER_SELECTOR),
      {
        center: [59.939035, 30.323118],
        zoom: 16,
      },
      {
        searchControlProvider: 'yandex#search',
      }
    ),
    myPlacemarkWithContent = new ymaps.Placemark(
      [59.938300, 30.323300],
      {},
      {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map-pin.svg',
        iconImageSize: [67, 100],
        iconImageOffset: [-34, -150],
      }
    );

  myMap.geoObjects.add(myPlacemarkWithContent);
});
