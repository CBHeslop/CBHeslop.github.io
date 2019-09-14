function movies() {
    let movieTitle = document.getElementById('movieTitle').value;

    getMovie(movieTitle);
  
}

async function getMovie(movieTitle) {

    const response = await fetch('https://www.omdbapi.com?s='+movieTitle+'&apikey=7f2c99ee');
    const data = await response.json();

    let numberOfMovies = data.Search;
    let outputDiv = '';

    for (let i = 0; i < numberOfMovies.length; i++) {
        //console.log(numberOfMovies[i]);
        outputDiv += `
        <div class="element">
            <div class="movieElement">
                <a onclick="eachMovie('${numberOfMovies[i].imdbID}')"><img src="${numberOfMovies[i].Poster}"> </a>
                <h3>${numberOfMovies[i].Title}</h3>
                <h6>${numberOfMovies[i].Year}</h6> 
            </div>
        </div>
        `;
    }
                                  
    document.getElementById('containerInfo').innerHTML = outputDiv;
  
}



async function eachMovie(imdbID) {

    const response = await fetch('https://www.omdbapi.com?i='+imdbID+'&apikey=7f2c99ee');
    const data = await response.json();

    console.log(data);

    let outputDiv2 = '';

    outputDiv2 = `<div id="lightBox">
                    <a onclick="document.getElementById('containerLightBox').style.display='none';document.getElementById('lightBox').style.display='none'">close here</a>
                    <div class="movieContainer">
                        <img src="${data.Poster}">
                        <div id="movieInformation">
                            <h4>Title: <span class="data">${data.Title}</span></h4>
                            <h4>Rating: ${data.Rated}</h4>
                            <h4>Director: ${data.Director}</h4>
                            <h4>Writer: ${data.Writer}</h4>
                            <h4>Actors: ${data.Actors}</h4>
                            <h4>Plot: ${data.Plot}</h4>
                        </div>
                    </div>
                </div>`;

    document.getElementById('containerInfo2').innerHTML = outputDiv2;

    document.getElementById('containerLightBox').style.display='block';
    document.getElementById('lightBox').style.display='block';

}