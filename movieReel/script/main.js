let websiteAddress = "https://api.themoviedb.org/3/";
let apiKey = "e0c4edf7e0462e9634eeeb488a0e1064";

function movies() {
    let movieTitle = document.getElementById('movieTitle').value;

    getMovie(movieTitle);
  
}

async function getMovie(movieTitle) {

    const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=e0c4edf7e0462e9634eeeb488a0e1064&query='+movieTitle+'');

    const data = await response.json();

    console.log(data);

    let numberOfMovies = data.results;
    let outputDiv = '';

    for (let i = 0; i < numberOfMovies.length; i++) {
        //console.log(numberOfMovies[i]);
        outputDiv += `
        <div class="element">
            <div class="movieElement">
                <a onclick="eachMovie(${numberOfMovies[i].id})"><img src="https://image.tmdb.org/t/p/w300/${numberOfMovies[i].poster_path}"> </a>
                <h3>${numberOfMovies[i].title}</h3>
            </div>
        </div>
        `;
    }

    document.getElementById('containerInfo').innerHTML = outputDiv;

}



async function eachMovie(id) {

    const response = await fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=e0c4edf7e0462e9634eeeb488a0e1064');

    const data = await response.json();

    console.log(data);

    let info = data;
    let outputDiv2 = '';

    outputDiv2 = `<div id="lightBox">
                    <a onclick="document.getElementById('containerLightBox').style.display='none';document.getElementById('lightBox').style.display='none'">Close</a>
                    <div class="movieContainer">
                        <img src="https://image.tmdb.org/t/p/w300/${info.poster_path}">
                        <div id="movieInformation">
                            <h4>Title: <span class="data">${info.title}</span></h4>
                            <h4>Release Date: ${data.release_date}</h4>
                            <h4>Rating: ${data.vote_average}/10</h4>
                            <h4>Website: <a target="_blank" href="${data.homepage}">${data.homepage}</a></h4>
                            <h4>Plot: ${info.overview}</h4>
                        </div>
                    </div>
                </div>`;

    document.getElementById('containerInfo2').innerHTML = outputDiv2;

    document.getElementById('containerLightBox').style.display='block';
    document.getElementById('lightBox').style.display='block';

}