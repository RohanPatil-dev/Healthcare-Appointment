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
  const { email, password } = req.body

  try {

    const docResult = await doctor.findOne({ email, password })

    if (docResult) {
      const token = setUser(docResult)
      return res.json({success :true,token, doctorId:docResult._id,datas : {name : docResult.name,email : docResult.email,phoneNumber : docResult.phoneNumber,age : docResult.age}})
  } else {
      return res.json({
          msg : "Invalid Email or Password",
      })
  };
  } catch (err) {
    return res.json("server error")
  }





}


async function docAllData(req, res) {
  try {
    const getAllData = await doctor.find()

    return res.json(getAllData)
  } catch (error) {
    return res.json({ error: error })
  }
}

module.exports = { docRegister, docLogin, docAllData }