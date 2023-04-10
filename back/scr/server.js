const express = require('express');
const server = express();
const PORT = 3001;

const router = require('./routes/index');

// server.get('', (req, res) => {
//     res.json
// })
server.use(express.json());
server.use('/rickandmorty', router);

server.listen(PORT, () => {
    console.log(`Server escuchado en el puerto: ${PORT}`);
})

// const http = require('http');
// const {getCharById} = require("./controllers/getCharById");
// const {getCharDetail} = require("./controllers/getCharDetail");


// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;
//     console.log(url);

//     if (url.includes("onsearch")) {
//         getCharById(res, url.split('/').at(-1));
//     }
//     if (url.includes("detail")) {
//         getCharDetail(res, url.split('/').at(-1));
//     }
// }).listen(3001, 'localhost');

// const data = require('./utils/data');

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const { url } = req;

//     if(url.includes('/rickandmorty/character')){
//         const id = url.split('/').at(-1);
//         const character = data.find(char => char.id == id);

//         if(character){
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end(JSON.stringify(character));
//         }else{
//             res.writeHead(404, { "Content-Type": "application/json" });
//             res.end(JSON.stringify({ error: 'Character not found' }));
//         }
//     }
// }).listen(3001, 'localhost');