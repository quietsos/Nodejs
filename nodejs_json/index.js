// JSON stands for javascript object Notification. 
// JSON is a lightweight format for stroing and transporting Data . 
// JSON is often used when data is sent from a server to a web page.


//creating data object variable
const bioData = {
    name : "sohan",
    age : 26,
    Zilla : "kushita",

}

console.log(bioData);
console.log(bioData.name);
console.log(bioData.Zilla);


// 1st method: converting object data to json data format.

const jsonData = JSON.stringify(bioData);
console.log(jsonData);
// console.log(jsonData.name); // we can called json data as called object data


// 2nd method:
//converting json format data to object data

const objData = JSON.parse(jsonData);
console.log(objData);
console.log(objData.name);



