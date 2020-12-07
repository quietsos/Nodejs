const fs = require('fs');   //calling filesystem module 

// creating data object

const info = {
    name : "Md Shohanuzzaman",
    Department : "Information and Communication Technology",
    University: "Islamic University Bangladesh", 
}

console.log(info);



//convert data object of json format
const jsonData = JSON.stringify(info);

console.log(jsonData);

//creating new synchronous file and add json format data to the file
fs.writeFile( 'json1.json',jsonData, (err) =>{
    console.log("done");
    console.log(err);

});

// read json data using asynchronous file system
fs.readFile("json1.json","utf-8", (err, data) =>{
    console.log(data);
    console.log("Got data");

    // convert json data to original data object format
    const orgData = JSON.parse(data);
    console.log(orgData);
    console.log(orgData.name);
});
