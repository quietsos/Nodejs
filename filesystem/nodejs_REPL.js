// Nodejs REPL 
// The repl feature of node is very useful in experimenting with  node.Nodejs
// and to debug javascript codes.

// REPL:
//     R: Read:- Reads user input process the input into javascript datastructure,
//             and store in memory. 
//     E: Eval:- Tokes and evalutes the data structure . 
//     P: Print:- prints the result. 
//     L: Loop:- loops the above command until the user presses ctrl twice. 


//  REPL:
//     1. js expression 
//     2. use variable
//     3. multiple code 
//     4. use (_) to get the last result 
//     5. we can use editor mode 

// const name = "shohan";

// console.log(name);


const fs = require('fs');

// creating a new file 
// fs.writeFileSync('read.txt',"hello guys. welcome here");

// fs.writeFileSync('read.txt',"what's up");

// fs.appendFileSync("read.txt"," How are you guys");

const buf_data = fs.readFileSync('read.txt');
ori_data = buf_data.toString();

console.log(ori_data);

fs.renameSync('read.txt','readwrite.txt');



