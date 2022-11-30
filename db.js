const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://krish_n_a:LzZmWm0xjTsm3zlv@userdata.4qqrkob.mongodb.net/inotebook?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to Mongo successfully");
    })
}

module.exports = connectToMongo;