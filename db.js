const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://krish_n_a:Kris@2001@inotebook.sfkjoxd.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to Mongo successfully");
    })
}

module.exports = connectToMongo;