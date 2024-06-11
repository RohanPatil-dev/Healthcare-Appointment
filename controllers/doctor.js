const doctor = require("../model/doctor")

const { setUser } = require("../Services/services")

async function docRegister(req, res) {
    try {
        const doctorResult = new doctor(req.body)

        await doctorResult.save()

        return res.json(doctorResult)
    } catch (error) {
        return res.json({ error: error })
    }
}

async function docLogin(req, res) {
   try {
    const { email, password } = req.body

    const docResult = await doctor.findOne({ email, password })

    if (!docResult) {
        return "Email or Password is incorrect !"
    }

    const token = setUser(docResult)

    return res.json({ msg: docResult, token: token })
   } catch (error) {
      return res.json({error : error})
   }

}


async function docAllData(req, res) {
  try {
    const getAllData = await doctor.find()

    return res.json(getAllData)
  } catch (error) {
    return res.json({error : error})
  }
}

module.exports = { docRegister, docLogin, docAllData }