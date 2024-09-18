const weathermapURL = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=Riyadh";

fetch(weathermapURL)
    .then((response) => response.json())
    .then((json) => console.log(json));