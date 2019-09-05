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

// Gallery lightbox
$(function() {
    const $gallery = $('.gallery a').simpleLightbox();
})


// Bike Gallery 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bikePhotos");
 
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
}

// selection option for small screens
function display() {
  let trailNumber = document.getElementById('smallScreenTrails').value;
  let wasatchCrest = document.getElementById('0').value;
  let rush = document.getElementById('1').value;
  let wasatchOverWasatch = document.getElementById('2').value;
  let bobsled = document.getElementById('3').value;
  let levitateDownhill = document.getElementById('4').value;
  let midMountainTrail = document.getElementById('5').value;
  let pinecone = document.getElementById('6').value;
  let vertigoDownhill = document.getElementById('7').value;
  let mapleHollow = document.getElementById('8').value;

  if (trailNumber == wasatchCrest) {
    trailOne();
  } else if (trailNumber == rush) {
    trailTwo();
  } else if (trailNumber == wasatchOverWasatch) {
    trailThree();
  } else if (trailNumber == bobsled) {
    trailFour();
  } else if (trailNumber == levitateDownhill) {
    trailFive();
  } else if (trailNumber == midMountainTrail) {
    trailSix();
  } else if (trailNumber == pinecone) {
    trailSeven();
  } else if (trailNumber == vertigoDownhill) {
    trailEight();
  } else if (trailNumber == mapleHollow) {
    trailNine();
  } else {
    trailTen();
  }
}



// Trail information
const apiUrl = "https://cbheslop.github.io/offThePath/data/trailData.json";

function trailOne() {

  document.getElementById("map1").style.display="block";
  document.getElementById("map2").style.display="none";
  document.getElementById("map3").style.display="none";
  document.getElementById("map4").style.display="none";
  document.getElementById("map5").style.display="none";
  document.getElementById("map6").style.display="none";
  document.getElementById("map7").style.display="none";
  document.getElementById("map8").style.display="none";
  document.getElementById("map9").style.display="none";
  document.getElementById("map10").style.display="none";

  var trail = 0;
  getTrailInfo(trail);
}

function trailTwo() {

  document.getElementById("map1").style.display="none";
  document.getElementById("map2").style.display="block";
  document.getElementById("map3").style.display="none";
  document.getElementById("map4").style.display="none";
  document.getElementById("map5").style.display="none";
  document.getElementById("map6").style.display="none";
  document.getElementById("map7").style.display="none";
  document.getElementById("map8").style.display="none";
  document.getElementById("map9").style.display="none";
  document.getElementById("map10").style.display="none";

  var trail = 1;
  getTrailInfo(trail);
}

function trailThree() {

  document.getElementById("map1").style.display="none";
  document.getElementById("map2").style.display="none";
  document.getElementById("map3").style.display="block";
  document.getElementById("map4").style.display="none";
  document.getElementById("map5").style.display="none";
  document.getElementById("map6").style.display="none";
  document.getElementById("map7").style.display="none";
  document.getElementById("map8").style.display="none";
  document.getElementById("map9").style.display="none";
  document.getElementById("map10").style.display="none";

  var trail = 2;
  getTrailInfo(trail);
}

function trailFour() {

  document.getElementById("map1").style.display="none";
  document.getElementById("map2").style.display="none";
  document.getElementById("map3").style.display="none";
  document.getElementById("map4").style.display="block";
  document.getElementById("map5").style.display="none";
  document.getElementById("map6").style.display="none";
  document.getElementById("map7").style.display="none";
  document.getElementById("map8").style.display="none";
  document.getElementById("map9").style.display="none";
  document.getElementById("map10").style.display="none";

  var trail = 3;
  getTrailInfo(trail);
}

function trailFive() {

  document.getElementById("map1").style.display="none";
  document.getElementById("map2").style.display="none";
  document.getElementById("map3").style.display="none";
  document.getElementById("map4").style.display="none";
  document.getElementById("map5").style.display="block";
  document.getElementById("map6").style.display="none";
  document.getElementById("map7").style.display="none";
  document.getElementById("map8").style.display="none";
  document.getElementById("map9").style.display="none";
  document.getElementById("map10").style.display="none";

  var trail = 4;
  getTrailInfo(trail);
}

function trailSix() {

  document.getElementById("map1").style.display="none";
  document.getElementById("map2").style.display="none";
  document.getElementById("map3").style.display="none";
  document.getElementById("map4").style.display="none";
  document.getElementById("map5").style.display="none";
  document.getElementById("map6").style.display="block";
  document.getElementById("map7").style.display="none";
  document.getElementById("map8").style.display="none";
  document.getElementById("map9").style.display="none";
  document.getElementById("map10").style.display="none";

  var trail = 5;
  getTrailInfo(trail);
}

function trailSeven() {

  document.getElementById("map1").style.display="none";
  document.getElementById("map2").style.display="none";
  document.getElementById("map3").style.display="none";
  document.getElementById("map4").style.display="none";
  document.getElementById("map5").style.display="none";
  document.getElementById("map6").style.display="none";
  document.getElementById("map7").style.display="block";
  document.getElementById("map8").style.display="none";
  document.getElementById("map9").style.display="none";
  document.getElementById("map10").style.display="none";

  var trail = 6;
  getTrailInfo(trail);
}

function trailEight() {

  document.getElementById("map1").style.display="none";
  document.getElementById("map2").style.display="none";
  document.getElementById("map3").style.display="none";
  document.getElementById("map4").style.display="none";
  document.getElementById("map5").style.display="none";
  document.getElementById("map6").style.display="none";
  document.getElementById("map7").style.display="none";
  document.getElementById("map8").style.display="block";
  document.getElementById("map9").style.display="none";
  document.getElementById("map10").style.display="none";

  var trail = 7;
  getTrailInfo(trail);
}

function trailNine() {

  document.getElementById("map1").style.display="none";
  document.getElementById("map2").style.display="none";
  document.getElementById("map3").style.display="none";
  document.getElementById("map4").style.display="none";
  document.getElementById("map5").style.display="none";
  document.getElementById("map6").style.display="none";
  document.getElementById("map7").style.display="none";
  document.getElementById("map8").style.display="none";
  document.getElementById("map9").style.display="block";
  document.getElementById("map10").style.display="none";

  var trail = 8;
  getTrailInfo(trail);
}

function trailTen() {

  document.getElementById("map1").style.display="none";
  document.getElementById("map2").style.display="none";
  document.getElementById("map3").style.display="none";
  document.getElementById("map4").style.display="none";
  document.getElementById("map5").style.display="none";
  document.getElementById("map6").style.display="none";
  document.getElementById("map7").style.display="none";
  document.getElementById("map8").style.display="none";
  document.getElementById("map9").style.display="none";
  document.getElementById("map10").style.display="block";

  var trail = 9;
  getTrailInfo(trail);
}


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



async function getTrailInfo(trail) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const name = data.utahTrails[trail].name;
  const location = data.utahTrails[trail].location;
  const rating = data.utahTrails[trail].rating;
  const difficulty = data.utahTrails[trail].difficulty;
  const distance = data.utahTrails[trail].distance;
  const elevation = data.utahTrails[trail].elevation;
  const grade = data.utahTrails[trail].grade;

  const info = `Name: ${name}<br>
                Location: ${location}<br>
                Rating: ${rating}<br>
                Difficulty: ${difficulty}<br>
                Distance: ${distance}<br>
                Elevation: (${elevation[0]} ${elevation[1]} ${elevation[2]} ${elevation[3]})<br>
                Grade: (${grade[0]} ${grade[1]})`;

  document.getElementById('outputDiv').innerHTML = info;
}
