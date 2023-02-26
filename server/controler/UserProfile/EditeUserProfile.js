import userModal from "../../modal/users.js";
import fs from "fs";
export const updateProfile = async (req, res) => {
  try {
    const { username, id, facebook, instagram, twitter, linkdin } = req.body;
    const updatedata = await userModal.updateOne(
      { _id: id },
      { username, facebook, instagram, twitter, linkdin }
    );
    //.......file update ..........
    if (req?.file) {
      let filename = req?.file?.filename;
      let filetype = filename.split(".").pop();
      let ProfileType = ["jpg", "png", "jpeg"];
      if (!ProfileType.includes(filetype)) {
        return res.json({
          status: "error",
          message: "Please upload PNG,JPG, JPEG file",
        });
      }
      const previous = await userModal.findById({ _id: id });
      const { profileImage } = previous;
      let fileUpdate = await userModal.updateOne(
        { _id: id },
        {
          profileImage: req?.file.filename,
        }
      );
      if (fileUpdate?.acknowledged && req?.file !== undefined) {
        if (profileImage) {
          fs.stat("./upload/" + profileImage, function (err, stats) {
            if (err) {
              return console.error(err);
            }
            fs.unlink("./upload/" + profileImage, function (err) {
              if (err) return console.log(err);
              // console.log("file deleted successfully");
            });
          });
        }
      }
    }
    //.......file updation end here.........

    if (updatedata?.acknowledged) {
      const updateProfile = await userModal.findById({ _id: id });

      return res.json({
        status: "ok",
        name: updateProfile?.username,
        id: updateProfile?._id,
        email: updateProfile?.email,
        profileImage: updateProfile?.profileImage,
        walletAddress: updateProfile?.wallet,
        banner: updateProfile?.banner,
        role: Object.values(updateProfile?.role),
        facebook: updateProfile?.facebook,
        instagram: updateProfile?.instagram,
        twitter: updateProfile?.twitter,
        linkdin: updateProfile?.linkdin,
        favoritesList: updateProfile?.favoritesList,
        follow: updateProfile?.follows,
      });
    } else {
      return res.json({ status: "error", message: "Please try again" });
    }
  } catch (error) {}
};
