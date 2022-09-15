// Imports the fs 
const fs = require('fs');

// How to read from a file?
fs.readFile('user-data.txt', (err,data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
});

// How to write in a file?
fs.writeFile('user-data.txt', 'Username=ErvinBilo', err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Wrote to file!');
    }
});

