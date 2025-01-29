const User = require("./models/userModel");
require("dotenv").config();
const connectDB = require("./config/db");

const users = [
    { email: "user1@example.com", name: "User One", password: "password1" },
    { email: "user2@example.com", name: "User Two", password: "password2" },
    { email: "user3@example.com", name: "User Three", password: "password3" },
    { email: "user4@example.com", name: "User Four", password: "password4" },
    { email: "user5@example.com", name: "User Five", password: "password5" },
    { email: "user6@example.com", name: "User Six", password: "password6" },
    { email: "user7@example.com", name: "User Seven", password: "password7" },
    { email: "user8@example.com", name: "User Eight", password: "password8" },
    { email: "user9@example.com", name: "User Nine", password: "password9" },
    { email: "user10@example.com", name: "User Ten", password: "password10" },
];


connectDB()

const createUsers = async (req, res) => {
    try {
        await User.deleteMany();
        await User.insertMany(users)
        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {

        await User.deleteMany()

        console.log('Data Destroyed!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    createUsers()
}