const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
require('./app/routes/note.routes.js')(app);
app.listen(PORT, () => {
    console.log("Server is listening on port 3000");
});