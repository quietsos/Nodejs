// The http.createServer() method includes request and response
//parameters which is supplies 

//The request object can be used to get information about the current HTTP request
//eg: url, request header and data

//The response object can be used to send a response for a current HTTP request


//If the response from the HTTP server is suppposed to be displayed as HTML,
// you should include and HTTP header which the correct content type:

const http = require('http');

const server = http.createServer((req,res) =>{
    res.end("Hello from the other side. This is Md shohanuzzaman");
     

});

server.listen(8000,"127.0.0.1", () => {
    console.log("Listening to the port no 8000");
});