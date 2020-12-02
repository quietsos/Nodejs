const os = require('os');

console.log(os.arch());
const freeMemory = os.freemem();
console.log(freeMemory);
console.log(`${freeMemory/1024/1024/1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 /1024 }`);

console.log(os.platform());
console.log(os.hostname());
console.log(os.temp);
console.log(os.EOL);
console.log(os.constants);
console.log(os.cpus());
console.log(os.endianness());
console.log(os.getPriority());
console.log(os.homedir());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.type());
console.log(os.uptime());
console.log(os.version());
console.log(os.constants);
