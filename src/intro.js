const fs = require('fs');

let debugMode = true;

function debug(message){
    if (debugMode){
        console.log('DEBUG:', message)
    }
}

const data = fs.readFileSync('config.tr')
debug ('debug message');





