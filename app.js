const express = require('express')
const app = express()
const path = require("path")

require("dotenv").config()

const bodyParser = require("body-parser")

const cors = require("cors")

const port = 8081

app.use(bodyParser.json())
app.use(cors())

// connection
const {connection} = require("./connection")

// routes
const userRoute = require("./routes/user")
const doctorRoute = require("./routes/doctor")
const appointmentRoute = require("./routes/appointment")

// middleware
app.use(express.urlencoded({extended : false}))


// connection
connection("mongodb://127.0.0.1:27017/Appointment").then(() => {
        console.log("MongoDB is connected successfully..........");
     }).catch((err) => {
        console.log(err);
     });

     // using route middleware
     app.use("/user",userRoute)
     app.use("/doctor",doctorRoute)
     app.use("/appointment",appointmentRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))