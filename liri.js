var axios = require("axios");


require("dotenv").config();
var keys = require("./keys.js");




var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var mediaSearch = process.argv.slice(3).join(" ")

var command = process.argv[2]

switch (command) {
  case "concert-this":
    findConcert();
    break;

  case "spotify-this-song":
    findSpotify();
    break;

  case "movie-this":
    findMovie();
    break;

  case "do-what-it-says":
    findLiri();
    break;
}

function findConcert() {

}

function findSpotify() {

  spotify.search({
    type: 'track',
    query: mediaSearch
  }, function (err, response) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

     var songData = response.tracks.items
    for (let i = 0; i < songData.length; i++) {

      console.log("Artist Name:",songData[i].album.artists[0].name);
      console.log("Song Name:",songData[i].name);
      console.log("Preview:",songData[i].external_urls.spotify);
      console.log("Album Name:",songData[i].album.name);
      console.log("___________________________\n")

    }
  });

}


// * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.


function findMovie() {
  // Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)


// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t="+mediaSearch+"&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("Title: ",response.data.Title);
    console.log("Year: ",response.data.Year);
    console.log("IMDB Rating: ",response.data.imdbRating);
    console.log("Rotten Tomatoes Rating: ",response.data.Ratings[1].Value);
    console.log("Country: ",response.data.Country);
    console.log("Language: ",response.data.Language);
    console.log("Plot: ",response.data.Plot);
    console.log("Actors: ",response.data.Actors);
    


    

    
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

}

// This will show the following information about the song in your terminal/bash window

// Artist(s)

// The song's name

// A preview link of the song from Spotify

// The album that the song is from


 

function findLiri() {

}






//   concert-this

// spotify-this-song

// movie-this

// do-what-it-says