/* Preston  5604473

Soda Springs 5607916

Fish Haven 5585010*/

/* Weather Summary for preston */
let weatherRequest = new XMLHttpRequest();
let urlAPI = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=89145a110f51cea251b59acfc591ab3d";

weatherRequest.open('GET', urlAPI, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('currentCondition').innerHTML = weatherData.weather[0].description;
    document.getElementById('temp').innerHTML = weatherData.main.temp;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;
    document.getElementById('windDirection').innerHTML = weatherData.wind.deg;

    /* Wind Direction */
    {
        var d = weatherData.wind.deg;
        var a;
    
        switch (parseInt((d / 45) + .5))
        {
            case 0:
                a = "N";
                break;
            case 1:
                a = "NE";
                break;
            case 2:
                a = "E";
                break;
            case 3:
                a = "SE";
                break;
            case 4:
                a = "S";
                break;
            case 5:
                a = "SW";
                break;
            case 6:
                a = "W";
                break;
            case 7:
                a = "NW";
                break;
        }
        document.getElementById('windDirection').innerHTML = a;
    } 

    /* Wind Chill Calculation */
    var t = weatherData.main.temp;
    var s = weatherData.wind.speed;
    var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16);
    f = f.toFixed(2);
    document.getElementById('windChill').innerHTML = f;
}


/* 5 day Weather Forecast for preston */
let weatherRequest2 = new XMLHttpRequest();
let urlAPI2 = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=89145a110f51cea251b59acfc591ab3d";

weatherRequest2.open('GET', urlAPI2, true);
weatherRequest2.send();

weatherRequest2.onload = function() {
    let forecast = JSON.parse(weatherRequest2.responseText);
    console.log(forecast);

    for(var i = 0; i <= 8; i++) {
        if (forecast.list[i].dt_txt.includes('15:00:00')) {

            var unixtimestamp = forecast.list[i].dt;
            var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var date = new Date(unixtimestamp*1000);
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var time = month + "/" + day + "/" + year;
            document.getElementById('day1').innerHTML = time;

            document.getElementById('forecast').innerHTML = forecast.list[i].main.temp;
        }
    }

     for(var i = 9; i <= 16; i++) {
        if (forecast.list[i].dt_txt.includes('15:00:00')) {

            var unixtimestamp = forecast.list[i].dt;
            var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var date = new Date(unixtimestamp*1000);
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var time = month + "/" + day + "/" + year;
            document.getElementById('day2').innerHTML = time;

            document.getElementById('forecast1').innerHTML = forecast.list[i].main.temp;
        }
    }

    for(var i = 17; i <= 24; i++) {
        if (forecast.list[i].dt_txt.includes('15:00:00')) {

            var unixtimestamp = forecast.list[i].dt;
            var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var date = new Date(unixtimestamp*1000);
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var time = month + "/" + day + "/" + year;
            document.getElementById('day3').innerHTML = time;

            document.getElementById('forecast2').innerHTML = forecast.list[i].main.temp;
        }
    }

    for(var i = 25; i <= 32; i++) {
        if (forecast.list[i].dt_txt.includes('15:00:00')) {

            var unixtimestamp = forecast.list[i].dt;
            var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var date = new Date(unixtimestamp*1000);
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var time = month + "/" + day + "/" + year;
            document.getElementById('day4').innerHTML = time;

            document.getElementById('forecast3').innerHTML = forecast.list[i].main.temp;
        }
    }

    for(var i = 33; i <= 40; i++) {
        if (forecast.list[i].dt_txt.includes('15:00:00')) {

            var unixtimestamp = forecast.list[i].dt;
            var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var date = new Date(unixtimestamp*1000);
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var time = month + "/" + day + "/" + year;
            document.getElementById('day5').innerHTML = time;

            document.getElementById('forecast4').innerHTML = forecast.list[i].main.temp;
        }
    }
}
