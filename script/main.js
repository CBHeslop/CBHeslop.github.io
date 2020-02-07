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

var web = document.getElementById('web');
var graphic = document.getElementById('graphic');
var illustration = document.getElementById('illustration');

web.onmouseover = function() {
    document.getElementById('webPopup').style.display = 'block';
}
web.onmouseout = function() {
    document.getElementById('webPopup').style.display = 'none';
}
graphic.onmouseover = function() {
    document.getElementById('graphicPopup').style.display = 'block';
}
graphic.onmouseout = function() {
    document.getElementById('graphicPopup').style.display = 'none';
}
illustration.onmouseover = function() {
    document.getElementById('illustrationPopup').style.display = 'block';
}
illustration.onmouseout = function() {
    document.getElementById('illustrationPopup').style.display = 'none';
}


// watch is connected to a number

function designWeb() {
    const watchNumber = 0;
    watches(watchNumber);
}

function designGraphic() {
    const watchNumber = 1;
    watches(watchNumber);
}

function designIllustration() {
    const watchNumber = 2;
    watches(watchNumber);
}

async function watches(watchNumber) {
    //const response = await fetch(apiUrl);
    //const data = await response.json();
    //console.log(data);
    //console.log(watchNumber);
    let outputDiv = '';
    
   // if statement getting json data for correct watch
    if (watchNumber == 0) {
            outputDiv += `
            <div class="projects">
                <figure>
                    <a target="_blank" href="watch-website/index.html"><img src="images/watchesLarge.jpg" alt="Watch Retail Website"></a>
                    <figcaption>JSON Data, Responsive/Mobile Friendly. <a target="_blank" href="https://github.com/CBHeslop/CBHeslop.github.io/tree/master/watch-website">Source Code</a></figcaption>
                </figure>
                <figure>
                    <a target="_blank" href="movieReel/index.html"><img src="images/movieReelLarge.jpg" alt="Movie search Website"></a>
                    <figcaption>JSON Data, Movie API and Responsive/Mobile Friendly. <a target="_blank" href="https://github.com/CBHeslop/CBHeslop.github.io/tree/master/movieReel">Source Code</a></figcaption>
                </figure>
                <figure>
                    <a target="_blank" href="offThePath/index.html"><img src="images/offThePathLarge.jpg" alt="Moutain Biking Website"></a>
                    <figcaption>JSON Data, Google Map and Responsive/Mobile Friendly. <a target="_blank" href="https://github.com/CBHeslop/CBHeslop.github.io/tree/master/offThePath">Source Code</a></figcaption>
                </figure>
                <figure>
                    <a target="_blank" href="hearTheClick/index.html"><img src="images/hearTheClickLarge.jpg" alt="Photography Website"></a>
                    <figcaption>Style Guide, Google Map and Responsive. <a target="_blank" href="https://github.com/CBHeslop/CBHeslop.github.io/tree/master/hearTheClick">Source Code</a></figcaption>
                </figure>
            </div>
            `;
    } else if (watchNumber == 1) {
            outputDiv += `
            <div class="projects">
                <figure>
                    <a target="_blank" href="letter.html"><img src="images/art230_p01-curtis-heslop.jpg" alt="Temple Website"></a>
                    <figcaption>JSON Data, Live Weather API, Google Map and Responsive. <a target="_blank" href="https://github.com/CBHeslop/CBHeslop.github.io/tree/master/temple-inn-and-suites">Source Code</a></figcaption>
                </figure>
                <figure>
                    <a target="_blank" href="porsche.html"><img src="images/porscheMockup.jpg" alt="Weather Website"></a>
                    <figcaption>JSON Data, Live Weather API, Google Map and Responsive. <a target="_blank" href="https://github.com/CBHeslop/CBHeslop.github.io/tree/master/weathersite">Source Code</a></figcaption>
                </figure>
            </div>
            `;
    } else if (watchNumber == 2) {
            outputDiv += `
            <div class="projects">
                <figure>
                    <a target="_blank" href="logo.html"><img src="images/calculatorLarge.jpg" alt="Calculator Website"></a>
                    <figcaption>JavaScript and Responsive. <a target="_blank" href="https://github.com/CBHeslop/CBHeslop.github.io/tree/master/calculatorProject">Source Code</a></figcaption>
                </figure>
            </div>
            `;
    } 
    document.getElementById('containerInfo').innerHTML = outputDiv;

    
}


function smoothScroll() {
    document.querySelector('#watchPageTitle').scrollIntoView({ 
        behavior: 'smooth' 
      });
}
