console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

console.log('Result: ', notes.add(10, -2));

// fs.appendFile('greetings.txt', `Hello ${user.username}.You are ${age} years old!`, function (err) {
//     if (err) {
//         console.log('Unable to write file');
//     }
// });
