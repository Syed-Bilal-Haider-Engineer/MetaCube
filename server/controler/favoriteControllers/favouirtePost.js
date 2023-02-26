import cellModal from "../../modal/buycells.js";
export const getFavListPost = async (req, res) => {
  try {
    let favList = await cellModal.find({ favoritesList: req.params?.id });

    res.status(202).json(favList);
  } catch (err) {
    console.log(err);
    res.status(201).json({
      message: "there is an error ",
      status: "Failed",
    });
  }
};
