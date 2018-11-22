/* Preston  5604473

Soda Springs 55607916

Fish Haven 5585010*/

/* Weather Summary for preston */
let weatherRequest = new XMLHttpRequest();
let urlAPI = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=89145a110f51cea251b59acfc591ab3d&";

weatherRequest.open('GET', urlAPI, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('currentCondition').innerHTML = weatherData.weather[0].description;
    document.getElementById('temp').innerHTML = weatherData.main.temp;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;
}


/* Weather Forecast for preston */
let weatherRequest2 = new XMLHttpRequest();
let urlAPI2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=89145a110f51cea251b59acfc591ab3d&";

weatherRequest2.open('GET', urlAPI2, true);
weatherRequest2.send();

weatherRequest2.onload = function() {
    let forecast = JSON.parse(weatherRequest2.responseText);
    console.log(forecast);

    for(var i = 0; i <= 8; i++) {
        if (forecast.list[i].dt_txt.includes('15:00:00')) {
        document.getElementById('forecast').innerHTML = forecast.list[i].main.temp_max;
        }
    }

     for(var i = 9; i <= 16; i++) {
        if (forecast.list[i].dt_txt.includes('15:00:00')) {
        document.getElementById('forecast1').innerHTML = forecast.list[i].main.temp_max;
        }
    }

    for(var i = 17; i <= 24; i++) {
        if (forecast.list[i].dt_txt.includes('15:00:00')) {
        document.getElementById('forecast2').innerHTML = forecast.list[i].main.temp_max;
        }
    }

    for(var i = 25; i <= 32; i++) {
        if (forecast.list[i].dt_txt.includes('15:00:00')) {
        document.getElementById('forecast3').innerHTML = forecast.list[i].main.temp_max;
        }
    }

    for(var i = 33; i <= 40; i++) {
        if (forecast.list[i].dt_txt.includes('15:00:00')) {
        document.getElementById('forecast4').innerHTML = forecast.list[i].main.temp_max;
        }
    }
}