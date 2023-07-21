//DEPENDENCIES
const express = require('express');
const router = express.Router();

const { getAllSongs } = require('../queries/songQueries')

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





//EXPORT
module.exports = router;