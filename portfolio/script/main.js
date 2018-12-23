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

