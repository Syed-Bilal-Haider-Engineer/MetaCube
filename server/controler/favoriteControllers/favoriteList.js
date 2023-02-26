import User from "../../modal/users.js";
import cellModal from "../../modal/buycells.js";

export const favoritesList = async (req, res) => {
  try {
    const userId = req.body?.userId;
    const nftId = req.body?.nftId;
    const nftDetail = await cellModal.findOne({ _id: nftId });
    const userDetail = await User.findOne({ _id: userId });
    if (nftDetail) {
      if (!(nftDetail && nftDetail?.user?.toHexString() == userId)) {
        await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { favoritesList: nftId } }
        );
        await cellModal.findOneAndUpdate(
          { _id: nftId },
          { $addToSet: { favoritesList: userId } }
        );
        res.status(202).json({
          message: "data updated successfully ",
          status: "successful",
        });
      }

    }
  } catch (err) {
    console.log(err);
  }
};
