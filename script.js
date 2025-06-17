document.getElementById("weather-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const city = document.getElementById("city-input").value;
  const apiKey = "bd63bb0a889e064f3a6c320bd788d261"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const res = await fetch(url);
  if (!res.ok) {
    alert("City not found or Try for typing along with country code!");
    return;
  }

  const data = await res.json();
  document.getElementById("location").textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("description").textContent = data.weather[0].description;
  document.getElementById("temp").textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;
  document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  document.getElementById("weather-result").classList.remove("hidden");
});
