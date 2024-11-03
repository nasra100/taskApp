const http = require('http');
const { json } = require('stream/consumers');
const PORT = 8000;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/task')) {
        taskRoutes(req, res)
    }
    else {
        res.writeHead(404, 'nodt found', {
            'content-type': 'application/json'
        })
        
        res.end(json.toStringifg({
            massage: 'page not found'
        }))
    }

});

server.listen(PORT,HOSTNAME, ()=>{
    console.log(`server running on port ${PORT}`)

})