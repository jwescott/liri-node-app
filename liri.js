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

function findMovie() {
  
}

// This will show the following information about the song in your terminal/bash window

// Artist(s)

// The song's name

// A preview link of the song from Spotify

// The album that the song is from



function findMovie() {

}

function findLiri() {

}






//   concert-this

// spotify-this-song

// movie-this

// do-what-it-says