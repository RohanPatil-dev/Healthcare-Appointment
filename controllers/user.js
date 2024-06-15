const user = require("../model/user")

const bcrypt = require("bcryptjs")

const { setUser } = require("../Services/services")

async function register(req,res) {
 try {
    const register = new user(req.body)

    await register.save()

    return res.json(register)
 } catch (error) {
    return res.json({error : error})
 }
}

async function login(req,res){
   try {
    const { email, password } = req.body

    const login = await user.findOne({ email, password })

    if (!login)
        return res.json({
            error: "Invalid Email or Password",
        });


    const token = setUser(login)

    res.cookie("uid", token)

    console.log(token);
    return res.json({msg : login,token : token})
   } catch (err) {
     return res.json({err : err})
   }
}

async function allPatient(req, res) {
    try {
        const getAllData = await user.find()

    return res.json(getAllData)
    } catch (error) {
        return res.json({error : error})
    }
}

module.exports = {register,login,allPatient}