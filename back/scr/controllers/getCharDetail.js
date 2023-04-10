const axios = require("axios");

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "46740eb499eb.794e3e4901c71a0f3e91";

const successH = (response, resServer) => {
    const {id, image, name, gender, species, origin } = response.data;

    resServer.json({id, name, gender, species, origin, image });

    // console.log({id, image, name, gender, species });
}

const errorH = (error, res) => {
    // res.writeHead(500, { "Content-Type": "text/plain" });
    res.status(500).json(error.message);
}

const getCharDetail = (req, res) => {
    const {id} = req.params;
    axios(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => successH(response, res))
    .catch(error => errorH(error, res))
};

module.exports = getCharDetail;
// const axios = require("axios");
// const http = require('http');

// const URL_BASE = "https://be-a-rym.up.railway.app/api";
// const KEY = "46740eb499eb.794e3e4901c71a0f3e91";

// const successH = (response, resServer) => {
//     const {id, image, name, gender, species, status, origin } = response.data;

//     resServer.writeHead(200, { "Content-Type": "application/json" });
//     resServer.end(JSON.stringify({id, name, gender, species, status, origin, image }));

//     // console.log({id, image, name, gender, species, origin });
// }

// const errorH = (error, res) => {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end(error.message);
// }

// const getCharDetail = (res, id) => {
//     axios(`${URL_BASE}/character/${id}?key=${KEY}`)
//     .then(response => successH(response, res))
//     .catch(error => errorH(error, res))
// }

// module.exports = {
//     getCharDetail,
// }