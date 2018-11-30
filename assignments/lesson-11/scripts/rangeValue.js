var slider = document.getElementById('range');
var output = document.getElementById('displayRange');
output.innerHTML = slider.value;

slider.oninput  = function() {
    output.innerHTML = this.value;
}