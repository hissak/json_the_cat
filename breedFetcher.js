const request = require('request');
const query = process.argv[2];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

// request(URL, function(error, response, body) {
//     if (error) {
//       console.log(error);
//     }
//     const data = JSON.parse(body);
//     console.log(data[0].description);
//   });


const fetchBreedDescription = function(breedName, callback) {
  request(URL, function(error, response, body) {
    const data = JSON.parse(body);
    callback(error, data[0].description)
});
}

module.exports = {fetchBreedDescription}