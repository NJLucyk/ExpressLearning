////////////////
// Exercise 6 //
////////////////

module.exports = function(foldername, ext, callback) {
  var fs = require('fs');
  var path = require('path');

  if (typeof ext === undefined)
    return callback("extension is undefined");
  ext = '.' + ext;
  if (foldername != null) {
    fs.readdir(foldername, function doneReading(err, list) {
      if (err)
        return callback(err);

      var fileWithExt = list.filter(function(elem) {
        return path.extname(elem) == ext;
      });

      callback(null, fileWithExt);
    });
  }
}
