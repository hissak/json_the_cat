const request = require('request');
const query = process.argv[2];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;
request(URL, function(error, response, body) {
  // console.log(body) // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body);
  // console.log('body type:', typeof body);
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  // console.log('data', data);
  // console.log('data type:', typeof data);
  console.log(data[0].description);// Print the HTML for the Google homepage.
});