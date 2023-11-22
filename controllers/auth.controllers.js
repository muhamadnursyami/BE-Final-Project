require("dotenv").config();
var jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");
module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          message: "Tolong isi semua inputan",
        });
      }

      const cekEmailUser = await User.findOne({ email: email });
      if (!cekEmailUser) {
        return res.status(400).json({
          message:
            "Akun anda belum terdaftar, silakan buat akun terlebih dahulu",
        });
      }

      const comparePassword = bcrypt.compareSync(
        password,
        cekEmailUser.password
      );

      if (!comparePassword) {
        return res.status(401).json({
          message: "Password Salah",
        });
      }
      const token = jwt.sign({ email: email }, process.env.JWT_KEY);

      return res.status(200).json({
        message: "Berhasil Login!",
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  },
  register: async (req, res) => {
    try {
      const { fullName, jenisKelamin, email, password, confirmPassword, role } =
        req.body;

      if (
        !fullName ||
        !jenisKelamin ||
        !email ||
        !password ||
        !confirmPassword
      ) {
        return res.status(400).json({
          message: "Tolong isi semua inputan",
        });
      }

      const cekEmailUser = await User.findOne({ email: email });
      if (cekEmailUser) {
        return res.status(400).json({
          message: "Email sudah terdaftar!",
        });
      }
      if (password.length <= 8 && confirmPassword.length <= 8) {
        return res.status(400).json({
          message: "Password harus minimal 8 karakter",
        });
      }
      const hashPassword = bcrypt.hashSync(password, 10);

      const dataUsers = await User.create({
        fullName,
        jenisKelamin,
        email,
        password: hashPassword,
        role,
      });

      res.status(200).json({
        message: "Register Berhasil",
        dataUsers,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  },
};
