const http = require('http'); 

http.get('http://192.168.4.92:3000', (res) => {
    console.log('StatusCode:',res.statusCode);
    res.on('data', (chunk) => {
        console.log(chunk.toString()); 
    });
});