let search = document.getElementById('searchText');

search.addEventListener('keypress', e =>{
    let searchText = e.target.value;
    getMovies(searchText);
});

function getMovies(searchText){
   let api =  `http://www.omdbapi.com/?s=${searchText}&apikey=8aee4439`;
 window.fetch(api).then(data => {
    let jsonData = data.json();
    jsonData
    .then(movie => {
        let movies = movie.Search;
        let output = '';
        for (let imdbMovie of movies) {
            output += `
            <div class="container1">
            <img src="${imdbMovie.Poster}">
            <div class="container-1 card-body1">
                <a href="#" class="btn btn-primary" style="width : 300px">${imdbMovie.Title}</a>
            </div>
                <div class="container-2 card-body2 text-align : center">
                <p class="card-text-1 btn btn-success">${imdbMovie.Year}</p>
                <p class="card-text-2 btn btn-secondary" style="margin-left : 80px">${imdbMovie.imdbID}</p>
                <p class="card-text-3 btn btn-danger">${imdbMovie.Type}</p>
                </div>
          </div>
            
            
            `;
            document.getElementById('template').innerHTML = output;
        }
    })
    .catch();

 }).catch(err => console.log(err));//fetching data from omdb server.......
}