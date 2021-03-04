const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

mongoose.connect("mongodb://localhost:27017/rock-the-vote-db",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log("Connected to MongoDB!"))
    .catch(error => console.log(error))

app.use(express.json())

app.use(morgan("dev"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMessage: err.message })
})

app.listen(9000, () => {
    console.log("Running on Port 9000")
})