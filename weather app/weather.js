

console.log(apiKey)
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
        document.querySelector(".describe").innerHTML = data.weather[0].main;

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            default:

                weatherIcon.src = "images/sun.png";
                break;
        }

        setWeatherBackground(data.weather[0].main.toLowerCase());
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}

function setWeatherBackground(condition) {
    const card = document.querySelector(".card");
    card.className = "card"; // Reset previous classes
    console.log(condition)
    if (condition.includes("rain")) {
        card.classList.add("rainy-bg");
    } else if (condition.includes("clear")) {
        card.classList.add("sunny-bg");
    } else if (condition.includes("cloud")) {
        card.classList.add("cloudy-bg");
    } else if (condition.includes("snow")) {
        card.classList.add("snowy-bg");
    } else {
        card.style.background = "linear-gradient(135deg, #6a5acd, #8a2be2)"; // Default gradient
    }
}



searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

document.querySelector('input').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);

    }
})

//dark mode
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");

toggleDarkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleDarkModeButton.textContent = "☀️";
    } else {
        toggleDarkModeButton.textContent = "🌙";
    }
});
