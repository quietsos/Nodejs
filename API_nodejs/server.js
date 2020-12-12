const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    // res.end("Hay.. I am from server side");

    if(req.url == "/"){
        res.end("Hello, you are in home page.");
    }

    else if(req.url == "/about"){
        res.end("Hay, this is AboutUS section.")
    }

    else if(req.url == "/userapi"){
        res.end("This is from the UserAPI side.");
        // fs.readFile(`${__dirname}/API_nodejs/userapi.json`); // we use this command if we call file from a external folder
        fs.readFile("userapi.json", "utf-8", (err, data)=>{
            console.log(data);
            res.end(data);
            console.log(err);

            // const objectData = JSON.parse(data);
            // console.log(objectData);   
        });

        
    }

    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1> 404 error<br>Page not found.</h1>");  
    }
});


server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the port no 8000");
});