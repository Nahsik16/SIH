require('dotenv').config({ path: './.env' })
const mongoose = require("mongoose")
const connectDB = require('./db/mongo')
const app = require('./app')



connectDB()
    .then(
        () => {
            app.on("error", (error) => {
                console.log("ERROR : ", error)
                throw error
            })
            app.listen(process.env.PORT || 8000, () => {
                console.log(`Server running at port ${process.env.PORT}`)
            })
        })
    .catch(
        (err) => {
            console.log("Connection Failed", err)
        }
    )


const user = require("./routes/user.route");

app.use("/api/user/", user);
