const express = require("express");

const router = express.Router()

const {insertAppointment,getAllAppointment,singleAppointment,deleteAppointment,updateAppointment} = require("../controllers/appointment")

router.post('/userAppointment', insertAppointment)

router.get("/userAppointment", getAllAppointment)

router.get("/userAppointment/:id",singleAppointment)

router.delete("/userAppointment/:id",deleteAppointment)

router.put("/userAppointment/:id",updateAppointment)

module.exports = router