//DEPENDENCIES
const express = require('express');
const router = express.Router();

const { getAllSongs, getOneSong } = require('../queries/songQueries')

//ROUTES

router.get('/', async (req, res) => {
    const result = await getAllSongs();
    
    if(result.length === 0){
        res.status(500).json({"Error": "Unable to retrieve any song data"});
    }
    else{
        res.send(result);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    let result = await getOneSong(id);

    if(result.length === 0){
        res.send("Could not find the song you were looking for");
    }
    else{
        res.send(...result);
    }

})



//EXPORT
module.exports = router;