window.onscroll = function() {
    myFunction();
}

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
}

/* Nav bar highlight */
$("a").click(function(){
    $("a").removeClass("active");
        $(this).addClass("active");
   });