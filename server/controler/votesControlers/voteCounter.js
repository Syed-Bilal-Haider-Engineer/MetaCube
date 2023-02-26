import cellModal from "../../modal/buycells.js";
export const voteCounter = async (req, res) => {
  try {
    const votesDetail = await cellModal.findOneAndUpdate(
      { _id: req.body.nftId },
      { $addToSet: { howManyVotes: req.body.userId } }
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
