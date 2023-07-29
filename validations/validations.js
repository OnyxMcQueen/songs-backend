const checkName = (req, res, next) => {
    if(!req.body.song_name){
        res.status(500).send("Sorry you need to provide a song name")
    }
    else{
        next();
    }
}

const checkArtist = (req, res, next) => {
    if(!req.body.artist){
        res.status(500).send("Sorry you need to provide a artist name")
    }
    else{
        next();
    }
}

const checkIsBoolean = (req, res, next) => {
    if(typeof req.body.is_favorite !== "boolean"){
        res.status(500).send("This must either be true or false boolean value");
    }
    else{
        next();
    }
}

module.exports = {
    checkName,
    checkArtist,
    checkIsBoolean
}