var button = document.querySelector(".btn");
var citySearch = document.querySelector(".citySearch");
var cityName = document.querySelector(".city");
var pic = document.querySelector(".picture");
var temps = document.querySelector(".temperature");
var apiKey = '0fc2c977e9f4a30933804861c8e17975';




var searchFormEl = document.querySelector("#search-form");


console.log('salt lake city')
// button to submit info placed in input on html
var buttonHandler = function(event) {
    // stop page from refreshing
    event.preventDefault()

    getCityWeather()
    // saveGetItems()
}

// fetches api and returns response.json()
var getCityWeather = function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        citySearch.value + "&appid=" +  apiKey)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(findWeather)


    // if no city or state is selected then return err 
    .catch(err => alert("Whoops, no info found!"))
};


// gets information from getCityWeather and pushes to html
var findWeather = function(response) {
    // pulling id's from html to replace once info comes back
    var cityEl = document.getElementById("city");
    cityEl.textContent = `${response.name}`

    var weatherEl = document.getElementById("wind");
    weatherEl.textContent = "wind speeds:  " + `${response.wind.speed}` 

    var weatherEl1 = document.getElementById("weather1");
    weatherEl1.textContent = "Weather: " + `${response.weather[0].main}`

    var temperatureEl = document.getElementById("temperature");
    temperatureEl.textContent =`${response.main.temp}` + " degrees Kelvin"

    // var iconEl = document.getElementById("icon");
    // iconEl.textContent = `${response.weather[0].icon}`

};


// saving dates, not working at the moment
var saveGetItems = function() {
    $(document).ready(function() {
        $(".btn").on("click", function() {
            var cityValue = $(this).siblings(".previous")
            var place = $(this).parent().attr("id")
            localStorage.setItem(cityValue, place)
            console.log(localStorage)
        })
        $("#previous-1").val(localStorage.getItem("past-1"))
        $("#previous-2").val(localStorage.getItem("past-2"))
        $("#previous-3").val(localStorage.getItem("past-3"))
        $("#previous-4").val(localStorage.getItem("past-4"))
        $("#previous-5").val(localStorage.getItem("past-5"))
        $("#previous-6").val(localStorage.getItem("past-6"))
    })
}

// end of handler 
button.addEventListener("click", buttonHandler, saveGetItems)