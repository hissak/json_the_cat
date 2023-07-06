const {fetchBreedDescription} = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, function(error, desc) {
  if (error) {
    console.log('Error details:', error);
  }
  console.log(desc);
});