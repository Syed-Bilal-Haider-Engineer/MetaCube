import cellModal from "../../modal/buycells.js";
export const getVoteCounter = async (req, res) => {
  try {
    const voteDetails = await cellModal.findOne({ _id: req.params?.id });
    const desiredArr = voteDetails?.howManyVotes.filter((el) => el != null);
    res.status(202).json({
      message: "data updated successfully ",
      data: desiredArr,
      status: "successful",
    });
  } catch (err) {
    res.status(201).json({
      message: "there is an error ",
      status: "Failed",
    });
  }
};
