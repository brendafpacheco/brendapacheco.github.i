function localizacao(coordenada) {
  var Position = {
    coords: [
      {
        latitude: coordenada.coords.latitude,
        longitude: coordenada.coords.longitude
      }
    ]
  };
  document.write('<h3>Sua latitude é:' + Position.coords[0].latitude + '</h3>');
  document.write('<h3>Sua latitude é:' + Position.coords[0].longitude + '</h3>');
}
navigator.geolocation.getCurrentPosition(localizacao);
