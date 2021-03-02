function displayTemperature(response) {
   console.log(response.data); 
   let temperatureElement = document.querySelector("#temperature");
   let cityElement = document.querySelector("#city");
   let descriptionElement = document.querySelector("#description");
   let humidityElement = document.querySelector("#humidity");
   let windSpeedElement = document.querySelector("#speed");
   temperatureElement.innerHTML = Math.round(response.data.main.temp);
   cityElement.innerHTML = response.data.name;
   descriptionElement.innerHTML = response.data.weather[0].description;
   humidityElement.innerHTML = response.data.main.humidity;
   windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = `34a66ef508b0cc45fe99cd407595565c`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);