'use strict';
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({ noCors: true });
const args = process.argv.slice(2);
const fileName = args[0];
const router = jsonServer.router(fileName);
let cors = require('cors');
server.use(cors());
server.use(middlewares);

// http fetch call
require('./http-calls/fetch-details')(server);

server.use((req, res, next) => {
    if (req.method === 'POST' || req.method === 'PATCH' || req.method === 'PUT' || req.method === 'OPTIONS') {
        req.method = 'GET';
    }

    res.header('Content-Type', 'application/json');
    next();
})

server.use(router);
server.listen(3000, () => {
    console.log('Server is running on port 3000');
})