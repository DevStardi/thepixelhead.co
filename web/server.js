const { log } = require('console');
const http = require('http');
const static = require('node-static');

let port = 9000
let file = new static.Server('./public');

http.createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port, function(){
    console.log('server running at port: ' + port);
});