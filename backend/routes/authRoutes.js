const express = require('express')
const {register,login,logout,getMe} = require("../controllers/authControllers")
const  protectRoute = require('../middlewares/protectRoute')
const authRouter = express.Router()

authRouter.post("/register",register)
authRouter.post("/login",login)
authRouter.post("/logout",logout)
authRouter.get("/me",protectRoute,getMe)

module.exports = authRouter