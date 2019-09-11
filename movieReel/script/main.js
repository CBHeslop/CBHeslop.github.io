function movies() {
    let movieTitle = document.getElementById('movieTitle').value;

    getMovie(movieTitle);
}

async function getMovie(movieTitle) {

    const response = await fetch('http://www.omdbapi.com?s='+movieTitle+'&apikey=7f2c99ee');
    const data = await response.json();

    let numberOfMovies = data.Search;
    let outputDiv = '';

    for (let i = 0; i < numberOfMovies.length; i++) {
        console.log(numberOfMovies[i]);
        outputDiv += `
        <div class="element">
            <div class="movieElement">
                <a onclick="eachMovie(${numberOfMovies[i].imdbID})"><img src="${numberOfMovies[i].Poster}"> </a>
                <h3>${numberOfMovies[i].Title}</h3>
                <h6>${numberOfMovies[i].Year}</h6> 
            </div>
        </div>
        `;
    }
                    
    document.getElementById('containerInfo').innerHTML = outputDiv;
   
}



async function eachMovie(imdbID) {
    console.log(imdbID);

}