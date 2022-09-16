const http = require('http'); // Import http

const server = http.createServer((request, response) => { // creating server 
    let body = []; 
    request.on('data', (chunk) => {
        body.push(chunk);
    });
    request.on('end', () => {
        body = Buffer.concat(body).toString(); // Convert the respond to a readable file 
        let userName = 'Uknown user'
        if (body) { 
            userName = body.split("=")[1]; // Splits the respond
        }

        response.setHeader('Content-Type', 'text/html'); // Useful to create HTML elements
        response.write(                    // Writing a HTML file
            `<h1>Hi ${userName}</h1>
            <form method="POST" action="/">
            <input type="text" name="userName">
            <button type="submit">
            </form>`);
        response.end();
    });
    
    
});
server.listen(3000); // Local host server 3000

