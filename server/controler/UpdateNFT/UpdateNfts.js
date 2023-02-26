import cellModal from "../../modal/buycells.js";
import fs from "fs";
import { ServerURL } from "../../utils/url.js";
export const updateNFT = async (req, res) => {
  try {
    const {
      _id,
      filelink,
      name,
      productTotalPrice,
      mapaddress,
      addressdetails,
      description,
      walletAddress,
    } = req.body;
    const metadata = { ...req.body };
    let status = false;
    if (metadata.hasOwnProperty("matadata0")) {
      status = true;
      [
        "_id",
        "filelink",
        "name",
        "productTotalPrice",
        "mapaddress",
        "addressdetails",
        "description",
        "walletAddress",
        "file",
      ].forEach((e) => {
        delete metadata[e];
      });
    }
    if (walletAddress) {
      if (status) {
        await cellModal.updateOne(
          { $and: [{ _id }, { address: walletAddress }] },
          {
            metadata: [metadata],
          }
        );
      }
      const updatedata = await cellModal.updateOne(
        { $and: [{ _id }, { address: walletAddress }] },
        {
          name,
          description,
          filelink,
          productTotalPrice,
          mapaddress,
          addressdetails,
        }
      );
      //.......file update ..........
      if (req?.file) {
        let NftFiles = ["jpg", "png", "jpeg"];
        const videoType = ["mov", "mp4", "avi", "wmf", "flv", "webm"];
        let filename = req?.file?.filename;
        const result = filename?.path.split(".");
        let filetype = result?.pop();
        if (NftFiles?.includes(filetype) || videoType?.includes(filetype)) {
          const previous = await cellModal.findById({ _id });
          const { file } = previous;

          let fileUpdate = await cellModal.updateOne(
            { $and: [{ _id }, { address: walletAddress }] },
            {
              image: `${ServerURL}/upload/${req?.file.filename}`,
              file: req?.file.filename,
            }
          );
          if (fileUpdate?.acknowledged && req?.file !== undefined) {
            if (file) {
              fs.stat("./upload/" + file, function (err, stats) {
                if (err) {
                  return console.error(err);
                }
                fs.unlink("./upload/" + file, function (err) {
                  if (err) return console.log(err);
                  // console.log("file deleted successfully");
                });
              });
            }
          }
        } else {
          return res.json({
            status: "error",
            message: "Please upload image(jpg,jpeg,png) or Video",
          });
        }
      }
      //.......file updation end here.........
      if (updatedata?.acknowledged) {
        return res.status(200).json({ status: "ok" });
      } else {
        return res.json({ status: "error", message: "Please try again" });
      }
    } else {
      return res.json({
        status: "error",
        message: "Wallet address not exist !",
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
