let api_key = "bc3879d0be0368c59db7c196ee0dd4e5";

const ApiCalling = () => {
  const inputField = document.querySelector(".search input");
  const cityInput = inputField.value;

  let api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityInput}&appid=${api_key}`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found!");
        return;
      }

      const card = document.querySelector(".card");
      const card_1 = document.createElement("div");
      card.innerHTML = "";
      const weather = document.createElement("div");
      const details = document.createElement("div");
      const col = document.createElement("div");
      const col_1 = document.createElement("div");
      const city = document.createElement("h1");
      const temp = document.createElement("h1");
      const humidity = document.createElement("p");
      const wind = document.createElement("p");
      const weather_icon = document.createElement("img");
      const hum_text = document.createElement("p");
      const wind_text = document.createElement("p");
      const hum_img = document.createElement("img");
      const wind_img = document.createElement("img");
      const child_1 = document.createElement("div");
      const child_2 = document.createElement("div");

      weather.className = "weather";
      details.className = "details";
      col.className = "col";
      col_1.className = "col_1";
      child_1.className = "child_1";
      child_2.className = "child_2";
      city.className = "city";
      temp.className = "temp";
      humidity.className = "humidity";
      wind.className = "wind";
      weather_icon.className = "weather_icon";

      city.innerHTML = data.name;
      temp.innerHTML = Math.round(data.main.temp) + " °C";
      humidity.innerHTML = data.main.humidity + "%";
      wind.innerHTML = data.wind.speed + " km/h";
      hum_img.src = "./Utils/humidity.png";
      wind_img.src = "./Utils/wind.png";
      hum_text.innerText = "Humidity";
      wind_text.innerText = "Wind Speed";

      child_1.append(humidity, hum_text);
      col.append(hum_img, child_1);
      child_2.append(wind, wind_text);
      col_1.append(wind_img, child_2);
      details.append(col, col_1);
      weather.append(weather_icon, temp, city);
      card_1.append(weather, details);
      card.append(card_1);

      if (data.weather[0].main == "Clouds") {
        weather_icon.src = "./Utils/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weather_icon.src = "./Utils/clear.png";
      } else if (data.weather[0].main == "Drizzle") {
        weather_icon.src = "./Utils/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weather_icon.src = "./Utils/mist.png";
      } else if (data.weather[0].main == "Rain") {
        weather_icon.src = "./Utils/rain.png";
      } else if (data.weather[0].main == "Snow") {
        weather_icon.src = "./Utils/snow.png";
      }

      inputField.value = "";
    })

    .catch((err) => {
      console.log("City not found or API error", err);
      alert("City not found!");
    });
};
