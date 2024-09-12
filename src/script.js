function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");

  let city = cityInput.value;
  let apiKey = "0f1t882aaea024e3o0b330af83a5fb90";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#current-temp-value");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", searchCity);

let dateToday = document.querySelector("#current-date");
let currentDate = new Date();
dateToday.innerHTML = formatDate(currentDate);
