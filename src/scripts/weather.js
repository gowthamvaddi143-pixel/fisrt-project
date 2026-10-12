
var API_KEY ="8480b36ca305137fa601519cca19538e";
var cityName ="Hyderabad"

function LoadWeatherData(cityname){
    cityName = cityname
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();

    })  
    .then(function(weatherObj){
        document.getElementById("lblCity").innerHTML = weatherObj.name
        document.getElementById("lblTemp").innerHTML = weatherObj.main.temp +"&deg;";
        document.getElementById("lblDetails").innerHTML = weatherObj.weather[0].description.toUpperCase();
    })
}

function SearchClick(){
    var cityName = document.getElementById("txtSearch").value;
    LoadWeatherData(cityName);
    
}
function CityChenge(){
    var cityName = document.getElementById("lstCities").value;
    LoadWeatherData(cityName);
}


