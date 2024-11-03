const http = require('http');
const { json } = require('stream/consumers');
const PORT = 9000;
const HOSTNAME = 'localhost';

const server = http.createserve((req, res) => {
    if (req.url.startswitch('/task')) {
        taskRoutes(req, res)
    }
    else {
        res.whriteHead(404, 'nodt found', {
            'content-type': 'application/json'
        })
        
        res.end(json.toStringifg({
            massage: 'page not found'
        }))
    }

});

server.lesten(PORT,HOSTNAME, ()=>{
    console.log('server running on port ${PORT}')

})