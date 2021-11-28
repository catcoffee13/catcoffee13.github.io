const API_KEY = "8d2108a276472910d2e47282e93f5a46";
const weather = document.querySelector("#weather");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    //console.log("Weather", lat, lng);
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weather.innerText = `${data.name}`+'\n'+`${data.weather[0].main} / ${data.main.temp}`;
      });
  }
  function onGeoError() {
    
  }


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);