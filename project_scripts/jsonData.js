var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var data = request.response;
    information(data);
}

function information(data) {
    var towns = data['temples'];

    for (i = 0; i < temples.length; i++) {
        
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myImg = document.createElement('img');

        if(i === 1 || i === 4 || i === 5)
            myH2.textContent = towns[i].name;
 /*       if(i === 1 || i === 4 || i === 5)
            myPara1.textContent = towns[i].motto;
        if(i === 1 || i === 4 || i === 5)
            myPara2.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
        if(i === 1 || i === 4 || i === 5)
            myPara3.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
        if(i === 1 || i === 4 || i === 5)
            myPara4.textContent = 'Annual Rain Fall:' + ' ' + towns[i].averageRainfall;
        
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myImg);
/*
        if(i === 1) myImg.src="images/12545922.jpg", myImg.alt="Fish Haven Photo";
        if(i === 4) myImg.src="images/2014-10-04_Preston-084.jpg", myImg.alt="Napolean Dynamite Photo";
        if(i === 5) myImg.src="images/SandyMinID_3997.jpg", myImg.alt="Gyser Photo";
*/
        section.appendChild(myArticle); 
    }
}