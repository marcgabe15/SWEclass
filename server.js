var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  console.log ('the parsedurl pathname length' + parsedUrl.pathname.length)
  if (request.method === 'GET') {
    if (parsedUrl.pathname == '/listings') {
      response.writeHead(200, {'Content-Type': 'application/json'})
      response.write(JSON.stringify(listingData))
      response.end()
    } else if (parsedUrl.pathname.length > 1) {
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write('Bad gateway error')
      response.end()
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end()
    }
  } else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('Bad gateway error')
    response.end()
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  listingData = JSON.parse(data);
  console.log(typeof(listingData))
  if (err) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Not Found");
  }  
  
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 

    HINT: Check out this resource on fs.readFile
    //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

    HINT: Read up on JSON parsing Node.js
   */

    //Check for errors
  

   //Save the sate in the listingData variable already defined
  

  //Creates the server
  
  //Start the server


});

var server = http.createServer(requestHandler)
server.listen(port, () => {
  console.log('Server listening on: http://127.0.0.1:' + port);
})
