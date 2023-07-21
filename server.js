//DEPENDENCIES
const app = require('./app');

//CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;

//LISTEN 
app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT} 😎`);
});