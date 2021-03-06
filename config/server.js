const port = 3003

const bodyParser = require("body-parser")
const express = require("express")
var cors = require('cors');
const server = express()

server.use(bodyParser.urlencoded({ extended:true }));
server.use(bodyParser.json());
server.use(cors());

server.listen(process.env.PORT || port, function(){
	console.log(`BACKEND is running on port ${port}.`);
})

module.exports = server