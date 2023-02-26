import User from "../../modal/users.js";
import cellModal from "../../modal/buycells.js";

export const getFavList = async (req, res) => {
  try {
    const nftDetail = await cellModal.findOne({ _id: req.params?.nftId });
    const desiredArr = nftDetail?.favoritesList.filter((el) => el != null);
    res.status(202).json({
      message: "data updated successfully ",
      data: desiredArr,
      status: "successful",
    });
  } catch (err) {
    console.log(err);
    res.status(201).json({
      message: "there is an error ",
      status: "Failed",
    });
  }
};
