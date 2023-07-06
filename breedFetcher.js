const request = require('request');
const query = process.argv[2];


// request(URL, function(error, response, body) {
//     if (error) {
//       console.log(error);
//     }
//     const data = JSON.parse(body);
//     console.log(data[0].description);
//   });


const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      
      if (data.length) {
        callback(error, data[0].description);
      } else {
        callback(error, null);
      }
    }
  });
};

module.exports = {fetchBreedDescription};