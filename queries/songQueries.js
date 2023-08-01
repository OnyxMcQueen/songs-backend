const db = require('../db/dbConfig');

async function getAllSongs(){
    try{
        const allSongs = db.any("SELECT * FROM songs ORDER BY id ASC");
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

async function createSong(data){
    try{
        const newSong = await db.one(`INSERT INTO songs (song_name, artist, album, song_time, is_favorite, song_image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [data.song_name, data.artist, data.album, data.song_time, data.is_favorite, data.song_image]);
        return newSong;
    }
    catch(error){
        return error;
    }
}

async function deleteSong(id){
    try{
        const deletedSong = await db.one(`DELETE FROM songs WHERE id = $1 RETURNING *`, [id]);
        return deletedSong;
    }
    catch(error){
        return error;
    }
}

async function updateSong(id, data){
    let values = Object.values(data);

    function makeQueryString(data){
        let counter = 2;
        let result = "";

        for(let key in data){
            result += `${key} = $${counter},`;
            counter++;
        }

        result = result.substring(0, result.length - 1);
        
        return result;
    }

    let queryString = makeQueryString(data);
    let finalQueryString = `UPDATE songs SET ${queryString} WHERE id = $1 RETURNING *`;

    const result = await db.one(finalQueryString, [id, ...values]);
    return result;
}

module.exports = {
    getAllSongs,
    getOneSong,
    createSong,
    deleteSong,
    updateSong
}