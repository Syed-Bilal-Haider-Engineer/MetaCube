import userModal from "../../modal/users.js";
import fs from "fs";
export const headerImage = async (req, res, next) => {
  try {
    const { id } = req.body;
    if (req?.file) {
      const previous = await userModal.findById({ _id: id });
      const { banner } = previous;
      let fileUpdate = await userModal.updateOne(
        { _id: id },
        {
          banner: req?.file.filename,
        }
      );
      if (fileUpdate?.acknowledged && req?.file !== undefined) {
        if (banner) {
          fs.stat("./upload/" + banner, function (err, stats) {
            if (err) {
              return console.error(err);
            }
            fs.unlink("./upload/" + banner, function (err) {
              if (err) return console.log(err);
              // console.log("file deleted successfully");
            });
          });
        }
        const updateData = await userModal
          .findById({ _id: id })
          .select("-password");
        return res.json({
          status: "ok",
          name: updateData?.username,
          id: updateData?._id,
          email: updateData?.email,
          profileImage: updateData?.profileImage,
          walletAddress: updateData?.wallet,
          banner: updateData?.banner,
        });
      }
    } else {
      return res.json({ status: "error", message: "Please try again" });
    }
  } catch (error) {
    next();
  }
};
