const appointment = require("../model/appointment")

async function insertAppointment(req, res) {
    try {
        const addAppointment = new appointment(req.body)

        await addAppointment.save()

        return res.json({ msg: addAppointment })
    } catch (error) {
        return res.json({error : error})
    }
}


async function getAllAppointment(req, res) {
    try {
        const allData = await appointment.find()

        return res.json(allData)
    } catch (error) {
        return res.json({error : error})
    }
}

async function singleAppointment(req, res) {
      try {
        const id = req.params.id

        const getSingleAppointment = await appointment.findById(id)
    
        if (!getSingleAppointment) {
            return res.json({ error: "Your selected query doesn't exist !" })
        }
    
        return res.json({ msg: getSingleAppointment })
      } catch (error) {
        return res.json({error : error})
      }
}


async function deleteAppointment(req, res) {
       try {
        const id = req.params.id

        const deleteAppointment = await appointment.findByIdAndDelete(id)
    
        if (!deleteAppointment) {
            return res.json({ error: "Your selected query doesn't exist !" })
        }
    
        return res.json({ msg: deleteAppointment })
       } catch (error) {
         return res.json({error : error})
       }
}

async function updateAppointment(req, res) {
     try {
        
    const id = req.params.id

    const updateAppointment = await appointment.findByIdAndUpdate(id, req.body)

    if (!updateAppointment) {
        return res.json({ error: "Your selected query doesn't exist !" })
    }

    return res.json({ msg: updateAppointment })
     } catch (error) {
        return res.json({error : error})
     }
}

module.exports = { insertAppointment, getAllAppointment, singleAppointment, deleteAppointment, updateAppointment }