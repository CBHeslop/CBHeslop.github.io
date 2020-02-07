function myFunction() {
    toggleHam();
    changebtn();
}

function toggleHam() {
    document.getElementById('hamburger').classList.toggle('hide');
}

function changebtn() {
    document.getElementById('transform').classList.toggle('rotatebtn');
}


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("main-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}