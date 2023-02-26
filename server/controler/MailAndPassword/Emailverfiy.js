import userModal from "../../modal/users.js";
export const verifyemail = async (req, res) => {
  try {
    const { id } = req.body;
    await userModal.findByIdAndUpdate(id, { verified: true });
    const user = await userModal.findById({ _id: id });
    console.log("user details", user);
    res.json({
      status: "ok",
      message: "User Verified!",
      role: user?.role,
      mail: user?.email,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Please try again!",
      user: false,
    });
  }
};
