import cellModal from "../../modal/buycells.js";
export const getViewCounter = async (req, res) => {
  try {
    const nftDetail = await cellModal.findOne({ _id: req.params?.id });
    const desiredArr = nftDetail && nftDetail?.howManyViews.filter((el) => el != null);
    res.status(202).json({
      message: "data updated successfully ",
      data: desiredArr.length,
      status: "successful",
    });
  } catch (err) {
    res.status(201).json({
      message: "there is an error ",
      status: "Failed",
    });
  }
};
