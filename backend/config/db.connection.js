require('dotenv').config();
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const connectionStr = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            })

        console.log("DB connection success")
    } catch (error) {
        console.log("DB connection failed")
        process.exit(1)
    } 
}

module.exports = connectionStr