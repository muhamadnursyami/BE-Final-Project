const User = require("../models/user");
const bcrypt = require("bcrypt");
module.exports = {
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

      const checkUser = await User.findOne({ email: email });
      if (checkUser) {
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
  login: async (req, res) => {},
};
