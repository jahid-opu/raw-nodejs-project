// dependencies
const http = require('http');

// app object - module scaffolding
const app = {}

// configuration
app.config = {}

// create server 
app.createServer = ()=> {
    const server = http.createServer(handleReqRes)
}

// handle requests response
app.handleReqRes = (req, res)=> {
    // response handle
    res.end("hello world!");

}