import User from "../../modal/users.js";
import cellModal from "../../modal/buycells.js";
export const likeListGet = async (req, res) => {
  try {
    const nftDetail = await cellModal.findOne({ _id: req.params.id });
    res.status(202).json({
      message: "data successfully fetch",
      data: nftDetail,
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(201).json({
      message: "Your request is denied",
      status: "failed",
    });
  }
};
