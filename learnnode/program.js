/////////////////
// Exercise 3  //
/////////////////

// var fs = require('fs');
// var filename = process.argv[2];
// if (filename != null) {
//   var buffer = fs.readFileSync(filename);

//   console.log(buffer.toString().split('\n').length - 1);
// }
// 


////////////////
// Exercise 4 //
////////////////

// var fs = require('fs');
// var filename = process.argv[2];
// if (filename != null) {
//   fs.readFile(filename, 'utf8', function doneReading(err, data) {
//     if (typeof data === undefined) {
//       return 0;
//     }

//     console.log(data.split('\n').length - 1);
//   });
// }


/////////////////
// Exercise 5  //
/////////////////

// var fs = require('fs');
// var path = require('path');
// var foldername = process.argv[2];
// var ext = process.argv[3];
// if (typeof ext === undefined) return 0;
// ext = '.' + ext;
// if (foldername != null) {
//   fs.readdir(foldername, function doneReading(err, list) {
//     if (typeof list === undefined) {
//       return 0;
//     }
//     var fileWithExt = list.filter(function(elem) {
//       return path.extname(elem) == ext;
//     });

//     for(var i = 0; i < fileWithExt.length; i++) 
//       console.log(fileWithExt[i]);
//   });
// }

// soln is better
//  fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//           console.log(file)
//       })
//     })

/////////////////
// Exercise 6  //
/////////////////

// var mymodule = require('./mymodule.js');
// var foldername = process.argv[2];
// var ext = process.argv[3];
// mymodule(foldername, ext, function(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     data.forEach(function(file) {
//       console.log(file);
//     });
//   }

// });



////////////////
// Exercise 7 //
////////////////

// var http = require('http');
// var url = process.argv[2];
// if (url) {
//   http.get(url, function(res) {
//     res.setEncoding('utf8');
//     res.on('data', function(data) {
//         console.log(data);
//     });

//     res.on('error', function(e) {
//       console.log(e);
//     });
//   });
// }
// sol.
// var http = require('http')                                                                     
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')                 
//   response.on('data', console.log)             
//   response.on('error', console.error)          
// })


///////////////////
// Exercise 8    //
///////////////////

// var http = require('http');
// var bl = require('bl');
// var url = process.argv[2];
// if(url) {
//   http.get(url, function (response) {
//     response.pipe(bl(function (err, data) { 
//       if(err) console.error("error occured: " + err);

//       var stringData = data.toString();
//       console.log(stringData.length);
//       console.log(stringData);
//     }))
//   });
// }

/////////////////
// Exercise 9  //
/////////////////

// var http = require('http');
// var bl = require('bl');
// var url = process.argv[2];
// var url2 = process.argv[3];
// var url3 = process.argv[4];

// if (url && url2 && url3) {
//   var urlRespons1;
//   var urlRespons2;
//   var urlRespons3;
//   var doneCounter = 0;

//   var checkCounter = function() {
//     doneCounter++;
//     if (doneCounter == 3) {
//       console.log(urlRespons1);
//       console.log(urlRespons2);
//       console.log(urlRespons3);
//     }
//   };

//   http.get(url, function(response) {
//     response.pipe(bl(function(err, data) {
//       if (err) console.error("error occured: " + err);
//       urlRespons1 = data.toString();
//       checkCounter();
//     }))
//   });
//   http.get(url2, function(response) {
//     response.pipe(bl(function(err, data) {
//       if (err) console.error("error occured: " + err);
//       urlRespons2 = data.toString();
//       checkCounter();
//     }))
//   });
//   http.get(url3, function(response) {
//     response.pipe(bl(function(err, data) {
//       if (err) console.error("error occured: " + err);
//       urlRespons3 = data.toString();
//       checkCounter();
//     }))
//   });
// } else {
//   console.error("3 urls not provided");
// }


// soln
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3)
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)


////////////////////////
// Exercise 10        //
////////////////////////

// var net = require('net');
// var strftime = require('strftime');
// var port = process.argv[2];
// var server = net.createServer(function(socket) {
//   var date = new Date();
//   //YYYY-MM-DD hh:mm
//   var data = strftime('%F %R', new Date()) + '\n';
//   socket.end(data);


// })
// server.listen(port);

// //soln
// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now() {
//   var d = new Date()
//   return d.getFullYear() + '-' + zeroFill(d.getMonth() + 1) + '-' + zeroFill(d.getDate()) + ' ' + zeroFill(d.getHours()) + ':' + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function(socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))

/////////////////
// Exercise 11 //
/////////////////

