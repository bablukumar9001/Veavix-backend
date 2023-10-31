const mongoose = require('mongoose')

const DB = "mongodb://localhost:27017/Veavix-contact-data"

mongoose.set('strictQuery', false);
mongoose.connect(DB)
    .then(() => {
        console.log("connection successful");
    }).catch(() => {
        console.log(" No connection ");
    })