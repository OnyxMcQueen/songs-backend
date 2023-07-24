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

async function getOneSong(id){
    try{
        let result = await db.any("SELECT * FROM songs WHERE id = $1", [id]);
        return result;
    }
    catch(error){
        return error;
    }
}

module.exports = {
    getAllSongs,
    getOneSong
}