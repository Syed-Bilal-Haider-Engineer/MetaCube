import userModal from "../../modal/users.js";
export const checkuser = async (req, res) => {
  try {
    const address = req.params?.address;
    const userdata = await userModal.findOne({ wallet: address });
    if (userdata) {
      res.json({
        status: "ok",
      });
    } else {
      res.json({
        status: "error",
      });
    }
  } catch (error) {
    console.log("error", error);
    res.status(404).json(error);
  }
};
