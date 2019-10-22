// menu icon
function myFunction(x) {
    x.classList.toggle("change");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }    
}




// watch selection description hover effect

var dress = document.getElementById('dress');
var field = document.getElementById('field');
var pilot = document.getElementById('pilot');
var dive = document.getElementById('dive');
var sport = document.getElementById('sport');
var misc = document.getElementById('misc');

dress.onmouseover = function() {
    document.getElementById('dressPopup').style.display = 'block';
}
dress.onmouseout = function() {
    document.getElementById('dressPopup').style.display = 'none';
}
field.onmouseover = function() {
    document.getElementById('fieldPopup').style.display = 'block';
}
field.onmouseout = function() {
    document.getElementById('fieldPopup').style.display = 'none';
}
pilot.onmouseover = function() {
    document.getElementById('pilotPopup').style.display = 'block';
}
pilot.onmouseout = function() {
    document.getElementById('pilotPopup').style.display = 'none';
}
dive.onmouseover = function() {
    document.getElementById('divePopup').style.display = 'block';
}
dive.onmouseout = function() {
    document.getElementById('divePopup').style.display = 'none';
}
sport.onmouseover = function() {
    document.getElementById('sportPopup').style.display = 'block';
}
sport.onmouseout = function() {
    document.getElementById('sportPopup').style.display = 'none';
}
misc.onmouseover = function() {
    document.getElementById('miscPopup').style.display = 'block';
}
misc.onmouseout = function() {
    document.getElementById('miscPopup').style.display = 'none';
}



// watch api

let apiUrl = "https://cbheslop.github.io/watch-website/data/watchData.json";

async function watches() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    let outputDiv = '';

    for (let i = 0; i < data.watches.length; i++) {
    
        outputDiv += `
        <div class="element">
            <div class="watchElement">
                <a onclick="eachWatch(${data.watches[i].id})"><img src="${data.watches[i].img}"> </a>
                <h2>${data.watches[i].name}</h2>
                <h3>${data.watches[i].price}</h3>
            </div>
        </div>
        `;
    }

    document.getElementById('containerInfo').innerHTML = outputDiv;

    smoothScroll();
}

function smoothScroll() {
    document.querySelector('#containerInfo').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

async function eachWatch(id) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(id);

    let outputDivTwo = '';

    outputDivTwo = `
    <div id="lightBox">
        <a onclick="document.getElementById('containerLightBox').style.display='none';document.getElementById('lightBox').style.display='none'">Close</a>
        <div class="watchContainer">
            <img src="${data.watches[id].img}">
            <div id="watchInformation">
                <h2><span class="data">${data.watches[id].name}</span></h2>
                <h4><span class="size">${data.watches[id].model}</span></h4>
                <h3>Price: ${data.watches[id].price}</h3>
                <h3>Size: ${data.watches[id].size}</h3>
                <h3>Color: ${data.watches[id].color}</h3>
                <h3>${data.watches[id].misc}</h3>
                <a target="_blank" href="${data.watches[id].url}">Shop Now</a>
                
            </div>
        </div>
    </div>
    `;

    document.getElementById('containerInfoTwo').innerHTML = outputDivTwo;

    document.getElementById('containerLightBox').style.display='block';
    document.getElementById('lightBox').style.display='block';
}