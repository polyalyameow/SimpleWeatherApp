const date = new Date();
const formattedDate = date.toLocaleString();

window.onload = function weather() {
  const apiKey = "f838ef2366702c7a26c145ab6363f25d";

  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const weatherMain = document.querySelector(".weather__main");

  function weatherData(city, country) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
        let output = `
          <div>
            <h1 class="mb-4" style="color: white; text-shadow:  -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 
            -1px -1px black, 1px 1px black, -1px 1px black, 1px -1px black;">${data.name}, ${data.sys.country}</h1>
            <h2 style="color: white; text-shadow:   -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 
            -1px -1px black, 1px 1px black, -1px 1px black, 1px -1px black;">Weather: ${data.weather[0].description}</h2>
            <h2 style="color: white; text-shadow:   -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 
            -1px -1px black, 1px 1px black, -1px 1px black, 1px -1px black;">Temperature: ${data.main.temp} &#8451;</h2>
            <h2 style="color: white; text-shadow:   -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 
            -1px -1px black, 1px 1px black, -1px 1px black, 1px -1px black;">Fuktighet: ${data.main.humidity} %</h2>
            <h2 style="color: white; text-shadow:   -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 
            -1px -1px black, 1px 1px black, -1px 1px black, 1px -1px black;">Vind: ${data.wind.speed} m/s</h2>
            <h2 style="color: white; text-shadow:   -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 
            -1px -1px black, 1px 1px black, -1px 1px black, 1px -1px black;"> ${formattedDate}</h2>
            
          </div>
        `;

        weatherMain.innerHTML = output;
        document.querySelector(".dropdown-toggle").textContent = data.name;
      });
  }

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      const city = event.target.id;
      const country = "SE";
      weatherData(city, country);
    });
  });
};
