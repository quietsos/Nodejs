// const chalk = require('chalk');

// console.log(chalk.red("Hello world"));
// console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// console.log(
//     chalk.green('I am a green line' + " " + 
//     chalk.blue.underline.bold('With a blue substring') +
//     "that becomes green again!")
// );


// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);


// console.log(chalk.bgRed(
//     "This is background.")
//     );



//    console.log(chalk`
//     CPU: {red ${cpu.totalPercent}%}
//     RAM: {green ${ram.used / ram.total * 100}%}
//     DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
//     `
//     );
// 

// console.log(chalk.green.underline.inverse("Hello world!"));




const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.red.underline.inverse('false'));

const res = validator.isEmail("Shohan.iu8@gmal.com");
console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));



