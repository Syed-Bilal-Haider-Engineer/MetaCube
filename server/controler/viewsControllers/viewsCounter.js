import cellModal from "../../modal/buycells.js";
export const viewCounter = async (req, res) => {
  try {
    const nftDetail = await cellModal.findOneAndUpdate(
      { _id: req.body.nftId },
      { $addToSet: { howManyViews: req.body.userId } }
    );
    res.status(202).json({
      message: "data updated successfully ",
      status: "successful",
    });
  } catch (err) {
    res.status(201).json({
      message: "there is an error ",
      status: "Failed",
    });
  }
};
