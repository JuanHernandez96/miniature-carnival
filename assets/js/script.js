var button = document.querySelector(".btn");
var citySearch = document.querySelector(".citySearch");
var cityName = document.querySelector(".city");
var info = document.querySelector(".info");
var temps = document.querySelector(".temperature");
var apiKey = '0fc2c977e9f4a30933804861c8e17975';


var searchFormEl = document.querySelector("#search-form");


console.log('salt lake city')


var getCityWeather = function(event) {
    event.preventDefault()
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + citySearch.value + "&appid=" +  apiKey)
    .then(response => response.json())
    .then(data => console.log(data))


    .catch(err => alert("Whoops, no info found!"))
};

button.addEventListener("click", getCityWeather)