const db = require('../db/dbConfig');

async function getAllSongs(){
    try{
        const allSongs = db.any("SELECT * FROM songs");
        return allSongs;
    }
    catch(error){
        return error;
    }
}

module.exports = {
    getAllSongs
}