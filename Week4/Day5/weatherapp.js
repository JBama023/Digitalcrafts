const apiKey = "69926b9e78a0e1b11fe53efcdccf316b";

const weatherURL = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;

const weatherContainer = document.querySelector(".weather");

const submitButton = document.querySelector(".submit-button");

async function findWeather() {
    weatherContainer.innerHTML = "";
    const input = document.querySelector(".userInput").value;
    const fetchWeatherData = await fetch(weatherURL + `&q=${input}&units=imperial`);
    const jsonWeather = await fetchWeatherData.json();
    console.log(jsonWeather);
    const showTemp = jsonWeather.main.temp;
    weatherContainer.append(showTemp);
};
submitButton.addEventListener("click", () => findWeather());