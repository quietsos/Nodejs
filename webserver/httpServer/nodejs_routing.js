const http = require('http');

const server = http.createServer((req, res) =>{
    // console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from the Home page.");

    }
    else if(req.url == "/about"){
        res.end("I am from the aboutUS section.");
    }

    else if(req.url == "/contact"){

       res.writeHead(200, {})
        res.end("Please ContactUS from this side.");
    }

    else{
        res.writeHead(404, {"content-type" : "text/html"});
        res.end(" <h1> 404 error. Page doesn't exist. </h1>");
    }

    
});

server.listen(8000,"127.0.0.1", () =>{
    console.log("Listening to the port no 8000");
});