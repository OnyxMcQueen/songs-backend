//DEPENDENCIES
const express = require('express');
const router = express.Router();

const { getAllSongs, getOneSong, createSong, deleteSong, updateSong } = require('../queries/songQueries');

const { checkName, checkArtist, checkIsBoolean } = require('../validations/validations');

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

    const result = await getOneSong(id);

    if(result.length === 0){
        res.send("Could not find the song you were looking for");
    }
    else{
        res.send(...result);
    }

})

router.post('/', checkName, checkArtist, checkIsBoolean, async(req, res) => {
    const createdSong = await createSong(req.body);

    if(Object.keys(createdSong).length === 0){
        res.status(500).send("Sorry we couldn't create this song.")
    }
    else{
        res.send(createdSong);
    }
})

router.delete('/:id', async (req, res) =>{
    const { id } = req.params;

    const result = await deleteSong(id);

    if(Object.keys(result).length === 0){
        res.status(500).send("It looks like the song was not deleted, please try again.")
    }
    else{
        res.send(result);
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await updateSong(id, req.body);

    res.send(result);
})



//EXPORT
module.exports = router;