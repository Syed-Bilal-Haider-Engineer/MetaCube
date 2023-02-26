import userModal from "../modal/users.js";
import { privateKey } from "../Utiles.js";
import Jwt from "jsonwebtoken";
export const tokenverify = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  try {
    if (token) {
      var decoded = Jwt.verify(token, privateKey);

      if (decoded?.id) {
        let docs = await userModal.findOne({ _id: decoded.id });
        if (docs) {
          return res.status(200).json({
            status: "ok",
            name: docs?.username,
            id: docs?._id,
            email: docs?.email,
            profileImage: docs?.profileImage,
            walletAddress: docs?.wallet,
            banner: docs?.banner,
            role: Object?.values(docs?.role),
            facebook: docs?.facebook,
            instagram: docs?.instagram,
            twitter: docs?.twitter,
            linkdin: docs?.linkdin,
            favoritesList: docs?.favoritesList,
            follows: docs?.follows,
          });
        } else {
          return res.status(403).json({
            status: "error",
            message: " invaild token",
            docs: docs,
          });
        }
        // if (err) {
        //   return res.status(403).json({
        //     status: "error",
        //     message: " invaild token",
        //   });
        // }
        //   return res.status(200).json({
        //     status: "ok",
        //     name: docs?.username,
        //     id: docs?._id,
        //     email: docs?.email,
        //     profileImage: docs?.profileImage,
        //     walletAddress: docs?.wallet,
        //     banner: docs?.banner,
        //     role: Object?.values(docs?.role),
        //   });
        // });
        //     } else {
        // return res.status(403).json({
        //   status: "error",
        //   message: " invaild token",
        // });
      }
    } else {
      return res.status(403).json({
        status: "error",
        message: " invaild token",
      });
    }
  } catch (error) {
    res.json({ error });
  }
};
