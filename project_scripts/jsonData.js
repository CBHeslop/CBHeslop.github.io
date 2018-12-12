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

        if(i === 0 || i === 1 || i === 2 || i === 3)
            myH2.textContent = temples[i].name;
        if(i === 0 || i === 1 || i === 2 || i === 3)
            myPara1.textContent = 'Address:' + ' ' + temples[i].address;
        if(i === 0 || i === 1 || i === 2 || i === 3)
            myPara2.textContent = 'Telephone:' + ' ' + temples[i].telephone;
        if(i === 0 || i === 1 || i === 2 || i === 3)
            myPara3.textContent = 'Email:' + ' ' + temples[i].email;
        if(i === 0 || i === 1 || i === 2 || i === 3)
            myPara4.textContent = 'Services:' + ' ' + temples[i].services;
        if(i === 0 || i === 1 || i === 2 || i === 3)
            myPara5.textContent = 'History:' + ' ' + temples[i].history;
        if(i === 0 || i === 1 || i === 2 || i === 3)
            myPara6.textContent = 'Closure Schedule:' + ' ' + temples[i].closureSchedule;
        
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);
/*        myArticle.appendChild(myImg);

        if(i === 1) myImg.src="images/12545922.jpg", myImg.alt="Fish Haven Photo";
        if(i === 4) myImg.src="images/2014-10-04_Preston-084.jpg", myImg.alt="Napolean Dynamite Photo";
        if(i === 5) myImg.src="images/SandyMinID_3997.jpg", myImg.alt="Gyser Photo";
*/
        section.appendChild(myArticle); 
    }
}