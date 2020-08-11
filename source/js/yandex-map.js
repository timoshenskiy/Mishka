var MAP_CONTAINER_SELECTOR = ".map-js";
var MAP_IMAGE_SELECTOR = ".map-img-js";
var MAP_MARK_SELECTOR = ".map-mark-js";

var HIDE_CLASS = "visually-hidden";

document.querySelector(MAP_IMAGE_SELECTOR).classList.add(HIDE_CLASS);
document.querySelector(MAP_MARK_SELECTOR).classList.add(HIDE_CLASS);

ymaps.ready(function () {
  var myMap = new ymaps.Map(
      document.querySelector(MAP_CONTAINER_SELECTOR),
      {
        center: [59.93895, 30.32625],
        zoom: 16,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    myPlacemarkWithContent = new ymaps.Placemark(
      [59.938549, 30.32301],
      {},
      {
        iconLayout: "default#imageWithContent",
        iconImageHref: "img/map-pin.svg",
        iconImageSize: [67, 100],
        iconImageOffset: [-34, -150],
      }
    );

  myMap.geoObjects.add(myPlacemarkWithContent);
});
