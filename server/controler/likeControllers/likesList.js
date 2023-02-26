import User from "../../modal/users.js";
import cellModal from "../../modal/buycells.js";

export const LikeList = async (req, res) => {
  try {
    const userId = req.body.userId;
    const nftId = req.body.nftId;
    const nftDetail = await cellModal.findOne({ _id: nftId });
    if (nftDetail) {
      if (!(nftDetail && nftDetail?.user?.toHexString() == userId)) {
        await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { likesList: nftId } }
        );
        await cellModal.findOneAndUpdate(
          { _id: nftId },
          { $addToSet: { likesList: userId } }
        );
        res.status(202).json({
          message: "data updated successfully ",
          status: "successful",
        });
      }
    }
  } catch (err) {
    console.log("there is an error");
    res.status(201).json({
      message: "Your request is denied",
      status: "failed",
    });
  }
};
