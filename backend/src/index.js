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
                // createUser();

            })
        })
    .catch(
        (err) => {
            console.log("Connection Failed", err)
        }
    )


const User = require('./models/user.models');

// async function createUser() {
//     try {
//         const user = await User.create({
//             fname: 'John',
//             lname: 'Doe',
//             email: 'john.doe@example.com',
//             username: 'johndoe',
//             password: 'securepassword',
//             role: 'alumini',
//             branch: 'CS',
//             year: 2024
//         });
//         console.log('User created:', user);
//     } catch (err) {
//         console.error('Error creating user:', err);
//     }
// }

















const user = require("./routes/user.route");

app.use("/api/user/", user);
