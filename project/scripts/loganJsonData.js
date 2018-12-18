var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://cbheslop.github.io/data/data.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var data = request.response;
    information(data);
}

function information(data) {
    var temples = data['temples'];

    for (i = 0; i < temples.length; i++) {
        
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myImg = document.createElement('img');

        if(i === 1)
            myH2.textContent = temples[i].name;
        if(i === 1)
            myPara1.textContent = 'Address:' + ' ' + temples[i].address;
        if(i === 1)
            myPara2.textContent = 'Telephone:' + ' ' + temples[i].telephone;
        if(i === 1)
            myPara3.textContent = 'Email:' + ' ' + temples[i].email;
        if(i === 1)
            myPara4.textContent = 'Services:' + ' ' + temples[i].services;
        if(i === 1)
            myPara5.textContent = 'History:' + ' ' + temples[i].history;
        if(i === 1)
            myPara6.textContent = 'Closure Schedule:' + ' ' + temples[i].closureSchedule;
        
        myArticle.appendChild(myH2);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);
        

        if(i === 1) myImg.src="images/logan-temple-large.jpg", myImg.alt="Logan Utah Temple";
       
        section.appendChild(myArticle); 
    }
}


/* Five Day Forecast */
let weatherRequest2 = new XMLHttpRequest();
let urlAPI2 = "https://api.openweathermap.org/data/2.5/forecast?zip=84321,us&units=imperial&APPID=89145a110f51cea251b59acfc591ab3d";

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
