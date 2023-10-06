const express = require("express");
const { GenerateOtpForRegister, Register } = require("./Auth/Register");
const { Login } = require("./Auth/Login");
const UploadImage = require("./Auth/UploadImage");
const { Admin } = require("./Auth/Admin");
const routers = express.Router();
routers.route("/generateotp").post(GenerateOtpForRegister);
routers.route("/register").post(Register);
routers.route("/login").post(Login)
routers.route("/uploadimage").post(UploadImage);
routers.route("/admin").get(Admin)
module.exports = routers;