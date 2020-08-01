ymaps.ready(function () {
  var myMap = new ymaps.Map(
      document.querySelector(".map-js"),
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
