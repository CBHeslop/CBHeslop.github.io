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
                <a onclick="eachWatch()"><img src=""> </a>
                <h3>${data.watches[i].name}</h3>
                <h3>${data.watches[i].price}</h3>
            </div>
        </div>
        `;
    }

    document.getElementById('containerInfo').innerHTML = outputDiv;


}