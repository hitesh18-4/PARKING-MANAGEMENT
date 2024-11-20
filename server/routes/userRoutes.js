const express = require("express")
const router = express.Router()
const express=require("express")

const {
    userRegister,
} = require("../controllers/userController")

router.post("/register",userRegister)

module.exports = router