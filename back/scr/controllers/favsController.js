let favs = require('../utils/favs');

const getFavs = (req, res) => {
    res.status(200).json(favs);
}

const postFav = (req, res) => {
    favs.push(req.body);
    res.status(200).json({status:'ok'});
}

const deleteFav = (req, res) => {
    const {id} = req.params;
    const favToDelete = favs.find(fav => fav.id == id)
    if(favToDelete){
        favs = favs.filter(fav => fav.id != id);
        res.status(200).json(favToDelete);
    }else res.status(404).json({error: 'no se encontro el personaje a eliminar'});
}

module.exports = {
    getFavs,
    postFav,
    deleteFav
}
// router.get('/', (req, res) => {

// });

// router.post('/', (req, res) => {

// });

// router.delete('/:id', (req, res) => {

// });