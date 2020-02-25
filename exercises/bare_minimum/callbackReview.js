/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, text) => {
    if (err) {
      callback(err, null);
    } else {
      var splitText = text.split('\n');
      callback(null, splitText[0]);
    }
  });

  /*fileStream.on('data', function(data) {
    fileData += data;

    var lines = fileData.split('\n');

    callback(null, lines[0]);

  });*/


};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
