const fs = require("fs");

// Synchronous:
    // Work in series working mode 

// 1. buffer data reading:
const data = fs.readFileSync('read.txt');
console.log(data);

const s_reading = fs.readFileSync('read.txt','utf-8');
console.log(s_reading);
console.log("After reading file");

// 2. Asynchonous:
        // work in parrell working mode 

fs.readFile('read.txt','UTF-8',
(err,data)=>{
    console.log(data);
    console.log(err);


});

console.log("what next");


fs.mkdir('asyn',(err)=>{
    console.log("Folder created");
});


//write data in a file using asynchronous

fs.writeFile('bio.txt',"Hello this is a test experiment", 
(err) =>{
    console.log("Successfully write.");
});

//Insert data existing file without overwritting

fs.appendFile('bio.txt',' I am Md Shohanuzzaman',
(err) =>{
    console.log("Successfully update");
});

//Reading buffer data using asynchronous fucntion

fs.readFile('bio.txt',
(err,data) =>{
    console.log(data);
    console.log(err);
});


//Reading string using asynchronous data

fs.readFile('bio.txt','utf-8',
(err,data) =>{
    console.log(data);
    console.log(err);
});

//Rename the file using asynchronous function

fs.rename('bio.txt','mybio.txt', 
(err) =>{
    console.log("Successfully renamed");
});

//delete file using asynchronous function

fs.unlink("filename",
(err)=>{
    console.log("Successfully deleted");
});

//delete directory using asynchronous function

fs.rmdir('folder name',
(err)=>{
    console.log("Successfully delete folder");
});