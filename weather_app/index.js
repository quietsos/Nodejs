// api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=fa1af2d32fbc3a660eefc4ead07e0d96

const http = require('http');
const fs = require('fs');
var requests = require('requests');


const homefile = fs.readFileSync("home.html","utf-8");

const repalaceVal = (tempval, orgVal) =>{
    let temperature = tempval.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp);
    temperature = temperature.replace("{%location%}", orgVal.main.temp);
    temperature = temperature.replace("{%country%}", orgVal.main.temp);
   

};

const server = http.createServer((req,res) =>{

    if(req.url == "/") {
        requests("http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=fa1af2d32fbc3a660eefc4ead07e0d96")
            
            .on("data", (chunk) => {
                const objdata = JSON.parse(chunk);
                const arrData = [objdata];
                // console.log(chunk);
                // console.log(objdata);
                // console.log(arrData);
                // console.log(arrData[0].main.temp);
                const reatTimeData =arrData.map((val) =>{
                    console.log(val.main);
                    // repalaceVal(homefile,val);
                });

              })


            .on("end", (err) => {
                if(err) return console.log("Connection closed due to errors", err);
                console.log("end");
              });
        }
});

server.listen(8000, "127.0.0.1");
