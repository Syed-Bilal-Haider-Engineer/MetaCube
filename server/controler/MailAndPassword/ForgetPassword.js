import userModal from "../../modal/users.js";
import bcrypt from "bcrypt";
export const forgetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(201).json({
        status: "error",
        message: "Please fill all fields !",
      });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const user = await userModal.findByIdAndUpdate(email, {
      password: passwordHash,
    });
    if (user) {
      res.json({
        status: "ok",
        message: "Password update successfully !",
      });
    } else {
      res.json({
        status: "error",
        message: "Please enter valied mail !",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Please try again!",
      user: false,
    });
  }
};
