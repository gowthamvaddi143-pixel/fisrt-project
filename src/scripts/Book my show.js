
var movies = ["drishyam-3","dhurandhar-revenge","varanasi"];

function LoadMovies(){
    document.getElementById("lstMovies").innerHTML ="";
    movies.map(function(movie){
        var option = document.createElement("option");
        option.text = movie.toUpperCase();
        option.value =movie.toLowerCase();
        document.getElementById("lstMovies").appendChild(option);
    })
        document.getElementById("lblCount").innerHTML =`Total No of Movies : ${movies.length}`;
}

function AddClick(){
    var movieName = document.getElementById("txtMovie").value;
    if(movies.indexOf(movieName.toLowerCase())==-1){
        movies.push(movieName);
        alert( `${movieName}\n Added to list`);
        LoadMovies();
        document.getElementById("txtMovie").value = ""; 
    }else{
        alert(`${movieName}Exists`);
    }
}

function SortAsc(){
    movies.sort();
    LoadMovies();

}
function SortDesc(){
    movies.sort();
    movies.reverse();
    LoadMovies();
}


function DeleteClick(){
    var selectedMovie = document.getElementById("lstMovies").value;
    var selectedMovieIndex = movies.indexOf(selectedMovie);
    var choice = confirm(`Are you  Sure?\n What to delete ${selectedMovie}`);
    if(choice==true){
        movies.splice(selectedMovieIndex,1);
        LoadMovies();
    }

}

function ClearClick(){
    movies.length= 0;
    LoadMovies()
}


function EditClick(){
    var movieName = document.getElementById("lstMovies").value;
    document.getElementById("txtEditMovie").value = movieName.toUpperCase();
}

function SaveClick(){
    var modifiedMovieName  = document.getElementById("txtEditMovie").value;
    var selectedMovie =document.getElementById("lstMovies").value;
    var selectedMovieIndex = movies.indexOf(selectedMovie);
    movies[selectedMovieIndex] = modifiedMovieName;
    LoadMovies()
}