require('dotenv').config({ path: './.env' })
const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        console.log('Hello')
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log(`MongoDB connected`)
    } catch (error) {
        console.log("MONGO Connection error ", error)
        process.exit(1)
    }
}


module.exports = connectDB