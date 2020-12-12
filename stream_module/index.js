//stream: streams are objects that let you read data from a source or write
//a data to destination in continous fashion. In nodejs there are four types of streams:
// Streaming means  listening or watching video in 'real time' instead of downloading 
// a file to your computer and watching it later

//1. Readable: Stream which is used for read operation.
//2. Writable : Stream which is used tor write operation
//3. Duplex: Stream which can be used for both read and write opeeration
//4. Transform - A type of duplex stream where the output is computed based on input

//Each type of stream is an eventEmitter instance and throws several events at 
//different instance of times.
//Example:
	//1.data: This event is fired when there data is avaiable to read.
	//2. end: This event is fired when there is no more data to read
	//3. error:This event is fired when there is any error receiving or writing data
	//4. finish: This event is fired when all the data has flushed to underlying system


	//1st way of data streaming: 

// const fs = require('fs');
// const http = require('http');

// const server = http.createServer();

// server.on('request', (req,res) =>{
// 	fs.readFile('input.txt', (err,data) =>{
// 		if(err){
// 			console.log.error(err);
// 		}
// 		res.end(data.toString());
// 		console.log(data.toString());
// 	});
// });

// server.listen(8000,"127.0.0.1");


//2nd way of streaming data
	// 1.Reading from a Stream 
	// 2. Creating a readable stream
	// 3. Handling strem events --> data, end, and error

const fs = require('fs');
const http = require('http');
// const {Stream } = require('stream')

const server = http.createServer();

server.on('request', (req,res) =>{

	const rstream = fs.createReadStream("input.txt");
	rstream.on('data', (chunkdata)=>{
		res.write(chunkdata);
	});
	rstream.on('end',()=>{
		res.end();
	});
	rstream.on('error', ()=>{
		console.log(err);
		res.end("File not found");
	});

});



server.listen(8000,"127.0.0.1");