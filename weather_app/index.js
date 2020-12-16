// api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=fa1af2d32fbc3a660eefc4ead07e0d96

const http = require('http');
const fs = require('fs');
var requests = require('requests');


const homefile = fs.readFileSync("home.html","utf-8");

const repalaceVal = (tempval, orgVal) =>{
    let temperature = tempval.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}",orgVal.weather[0].main)
    return temperature;

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
                // const realTimeData =arrData.map((val) =>{
                //     console.log(val.main);
                //     console.log(val.timezone);
                //     console.log(val.wind);
                //     console.log(val.sys);
                //     repalaceVal(homefile,val);
                //     // res.write(realTimeData);
                //     console.log(realTimeData);
                // });

                const realTimeData = arrData.map((val) => repalaceVal(homefile,val)).join("");
                console.log(realTimeData);
                res.write(realTimeData);

              })


            .on("end", (err) => {
                if(err) return console.log("Connection closed due to errors", err);
                console.log("end");
                res.end();
              });
        }
});

server.listen(8000, "127.0.0.1");
