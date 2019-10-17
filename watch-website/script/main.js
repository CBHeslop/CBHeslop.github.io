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
                <h3>${data.watches[i].name}</h3>
                <h3>${data.watches[i].price}</h3>
            </div>
        </div>
        `;
    }

    document.getElementById('containerInfo').innerHTML = outputDiv;
}

async function eachWatch(id) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(id);

    let outputDivTwo = '';

    outputDivTwo = `
    <div id="lightBox">
        <a onclick="document.getElementById('containerLightBox').style.display='none';document.getElementById('lightBox').style.display='none'">Close</a>
        <div class="movieContainer">
            <img src="">
            <div id="watchInformation">
                <h4>Title: <span class="data">${data.name}</span></h4>
                <h4>Price: ${data.price}</h4>
                <h4>Model: ${data.model}</h4>
                
            </div>
        </div>
    </div>
    `;

    document.getElementById('containerInfoTwo').innerHTML = outputDivTwo;

    document.getElementById('containerLightBox').style.display='block';
    document.getElementById('lightBox').style.display='block';
}