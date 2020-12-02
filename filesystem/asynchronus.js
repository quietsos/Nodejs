const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');
const fs = require('fs');
const { isMainThread } = require('worker_threads');


fs.writeFile('read.txt','Hello world guys',
(err)=>{  //callback function is needed for asynchronous 
    console.log("file is created");
    console.log(err);
}
);


// // Callback function:
//     1.We pass them a function as an agrument -a callback 
//     that gets called when that task completes. 
//     2. That callback has an agrument that tells you 
//     whether the operation is completed successfully
//     3. Now we need to day what to do when fs.writeFile
//     has completed (even if it's nothing), and start checking for error



// ***********section-2************


const fs = require('fs');


// write data in a file:
fs.appendFile('read.txt',' This is a very beautiful day.', 
(err) => {
    console.log("Data inserted");
    console.log(err);
});


// Reading buffer data:

fs.readFile('read.txt',
(err, data)=>{
    console.log("Read data");
    console.log(data);

});

// Reading string data:

fs.readFile('read.txt','UTF-8',
(err, data)=>{
    // console.log("Read data");
    console.log(data);
    console.log(err);

});


