const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, dogData) => {
    if (!error) {
      callback(dogData);
    } else {
      callback(undefined);
    }
  });
};

module.exports = breedDetailsFromFile;


// MANUAL TESTING
// const breed = 'Bombay';
// const ourCallback = (ourStuff) => {
//   console.log('This is inside the callback')
//   console.log(ourStuff);
// };

// breedDetailsFromFile(breed, ourCallback);