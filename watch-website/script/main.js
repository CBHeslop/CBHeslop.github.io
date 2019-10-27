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



// watch is connected to a number

function watchesDress() {
    const watchNumber = 0;
    watches(watchNumber);
}

function watchesField() {
    const watchNumber = 1;
    watches(watchNumber);
}

function watchesPilot() {
    const watchNumber = 2;
    watches(watchNumber);
}

function watchesDive() {
    const watchNumber = 3;
    watches(watchNumber);
}

function watchesSport() {
    const watchNumber = 4;
    watches(watchNumber);
}

function watchesMisc() {
    const watchNumber = 5;
    watches(watchNumber);
}

// api for watches

let apiUrl = "https://cbheslop.github.io/watch-website/data/watchData.json";

// api data fetched

async function watches(watchNumber) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    console.log(watchNumber);
    let outputDiv = '';
    
   // if statement getting json data for correct watch
    if (watchNumber == 0) {
        for (let i = 0; i < data.watches.dressWatches.length; i++) {
            outputDiv += `
            <div class="element">
                <div class="watchElement">
                    <a onclick="eachWatch(${data.watches.dressWatches[i].id}, ${watchNumber})"><img src="${data.watches.dressWatches[i].img}"> </a>
                    <h2>${data.watches.dressWatches[i].name}</h2>
                </div>
            </div>
            `;
        }
    } else if (watchNumber == 1) {
        for (let i = 0; i < data.watches.fieldWatches.length; i++) {
            outputDiv += `
            <div class="element">
                <div class="watchElement">
                    <a onclick="eachWatch(${data.watches.fieldWatches[i].id}, ${watchNumber})"><img src="${data.watches.fieldWatches[i].img}"> </a>
                    <h2>${data.watches.fieldWatches[i].name}</h2>
                </div>
            </div>
            `;
        }
    } else if (watchNumber == 2) {
        for (let i = 0; i < data.watches.pilotWatches.length; i++) {
            outputDiv += `
            <div class="element">
                <div class="watchElement">
                    <a onclick="eachWatch(${data.watches.pilotWatches[i].id}, ${watchNumber})"><img src="${data.watches.pilotWatches[i].img}"> </a>
                    <h2>${data.watches.pilotWatches[i].name}</h2>
                </div>
            </div>
            `;
        }
    } else if (watchNumber == 3) {
        for (let i = 0; i < data.watches.diveWatches.length; i++) {
            outputDiv += `
            <div class="element">
                <div class="watchElement">
                    <a onclick="eachWatch(${data.watches.diveWatches[i].id}, ${watchNumber})"><img src="${data.watches.diveWatches[i].img}"> </a>
                    <h2>${data.watches.diveWatches[i].name}</h2>
                </div>
            </div>
            `;
        }
    } else if (watchNumber == 4) {
        for (let i = 0; i < data.watches.sportWatches.length; i++) {
            outputDiv += `
            <div class="element">
                <div class="watchElement">
                    <a onclick="eachWatch(${data.watches.sportWatches[i].id}, ${watchNumber})"><img src="${data.watches.sportWatches[i].img}"> </a>
                    <h2>${data.watches.sportWatches[i].name}</h2>
                </div>
            </div>
            `;
        }
    } else if (watchNumber == 5) {
        for (let i = 0; i < data.watches.miscWatches.length; i++) {
            outputDiv += `
            <div class="element">
                <div class="watchElement">
                    <a onclick="eachWatch(${data.watches.miscWatches[i].id}, ${watchNumber})"><img src="${data.watches.miscWatches[i].img}"> </a>
                    <h2>${data.watches.miscWatches[i].name}</h2>
                </div>
            </div>
            `;
        }
    }

    document.getElementById('containerInfo').innerHTML = outputDiv;

    smoothScroll();
}

function smoothScroll() {
    document.querySelector('#containerInfo').scrollIntoView({ 
        behavior: 'smooth' 
      });
}

async function eachWatch(id, watchNumber) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    

    let outputDivTwo = '';

    if (watchNumber == 0) {
       
            outputDivTwo = `
            <div id="lightBox">
                <a onclick="document.getElementById('containerLightBox').style.display='none';document.getElementById('lightBox').style.display='none'">Close</a>
                <div class="watchContainer">
                    <img src="${data.watches.dressWatches[id].img}">
                    <div id="watchInformation">
                        <h2><span class="data">${data.watches.dressWatches[id].name}</span></h2>
                        <h4><span class="size">${data.watches.dressWatches[id].model}</span></h4>
                        <h3>Size: ${data.watches.dressWatches[id].size}</h3>
                        <h3>Color: ${data.watches.dressWatches[id].color}</h3>
                        <h3>${data.watches.dressWatches[id].misc}</h3>
                        <a target="_blank" href="${data.watches.dressWatches[id].url}">Shop Now</a>
                        
                    </div>
                </div>
            </div>
            `;
        
    } else if (watchNumber == 1) {
            outputDivTwo = `
            <div id="lightBox">
                <a onclick="document.getElementById('containerLightBox').style.display='none';document.getElementById('lightBox').style.display='none'">Close</a>
                <div class="watchContainer">
                    <img src="${data.watches.fieldWatches[id].img}">
                    <div id="watchInformation">
                        <h2><span class="data">${data.watches.fieldWatches[id].name}</span></h2>
                        <h4><span class="size">${data.watches.fieldWatches[id].model}</span></h4>
                        <h3>Size: ${data.watches.fieldWatches[id].size}</h3>
                        <h3>Color: ${data.watches.fieldWatches[id].color}</h3>
                        <h3>${data.watches.fieldWatches[id].misc}</h3>
                        <a target="_blank" href="${data.watches.fieldWatches[id].url}">Shop Now</a>
                        
                    </div>
                </div>
            </div>
            `;
    } else if (watchNumber == 2) {
            outputDivTwo = `
            <div id="lightBox">
                <a onclick="document.getElementById('containerLightBox').style.display='none';document.getElementById('lightBox').style.display='none'">Close</a>
                <div class="watchContainer">
                    <img src="${data.watches.pilotWatches[id].img}">
                    <div id="watchInformation">
                        <h2><span class="data">${data.watches.pilotWatches[id].name}</span></h2>
                        <h4><span class="size">${data.watches.pilotWatches[id].model}</span></h4>
                        <h3>Size: ${data.watches.pilotWatches[id].size}</h3>
                        <h3>Color: ${data.watches.pilotWatches[id].color}</h3>
                        <h3>${data.watches.pilotWatches[id].misc}</h3>
                        <a target="_blank" href="${data.watches.pilotWatches[id].url}">Shop Now</a>
                        
                    </div>
                </div>
            </div>
            `;
    } else if (watchNumber == 3) {
            outputDivTwo = `
            <div id="lightBox">
                <a onclick="document.getElementById('containerLightBox').style.display='none';document.getElementById('lightBox').style.display='none'">Close</a>
                <div class="watchContainer">
                    <img src="${data.watches.diveWatches[id].img}">
                    <div id="watchInformation">
                        <h2><span class="data">${data.watches.diveWatches[id].name}</span></h2>
                        <h4><span class="size">${data.watches.diveWatches[id].model}</span></h4>
                        <h3>Size: ${data.watches.diveWatches[id].size}</h3>
                        <h3>Color: ${data.watches.diveWatches[id].color}</h3>
                        <h3>${data.watches.diveWatches[id].misc}</h3>
                        <a target="_blank" href="${data.watches.diveWatches[id].url}">Shop Now</a>
                        
                    </div>
                </div>
            </div>
            `;
    } else if (watchNumber == 4) {
            outputDivTwo = `
            <div id="lightBox">
                <a onclick="document.getElementById('containerLightBox').style.display='none';document.getElementById('lightBox').style.display='none'">Close</a>
                <div class="watchContainer">
                    <img src="${data.watches.sportWatches[id].img}">
                    <div id="watchInformation">
                        <h2><span class="data">${data.watches.sportWatches[id].name}</span></h2>
                        <h4><span class="size">${data.watches.sportWatches[id].model}</span></h4>
                        <h3>Size: ${data.watches.sportWatches[id].size}</h3>
                        <h3>Color: ${data.watches.sportWatches[id].color}</h3>
                        <h3>${data.watches.sportWatches[id].misc}</h3>
                        <a target="_blank" href="${data.watches.sportWatches[id].url}">Shop Now</a>
                        
                    </div>
                </div>
            </div>
            `;
    } else if (watchNumber == 5) {
            outputDivTwo = `
            <div id="lightBox">
                <a onclick="document.getElementById('containerLightBox').style.display='none';document.getElementById('lightBox').style.display='none'">Close</a>
                <div class="watchContainer">
                    <img src="${data.watches.miscWatches[id].img}">
                    <div id="watchInformation">
                        <h2><span class="data">${data.watches.miscWatches[id].name}</span></h2>
                        <h4><span class="size">${data.watches.miscWatches[id].model}</span></h4>
                        <h3>Size: ${data.watches.miscWatches[id].size}</h3>
                        <h3>Color: ${data.watches.miscWatches[id].color}</h3>
                        <h3>${data.watches.miscWatches[id].misc}</h3>
                        <a target="_blank" href="${data.watches.miscsWatches[id].url}">Shop Now</a>
                        
                    </div>
                </div>
            </div>
            `;
    }

   
    document.getElementById('containerInfoTwo').innerHTML = outputDivTwo;

    document.getElementById('containerLightBox').style.display='block';
    document.getElementById('lightBox').style.display='block';
}

/*
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
*/