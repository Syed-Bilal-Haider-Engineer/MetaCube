import { privateKey } from "../Utiles.js";
import userModal from "../modal/users.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
export const login = async (req, res) => {
  try {
    const { email, password, address } = req?.body;
    if (email && password) {
      const islogin = await userModal.findOne({ email });
      const token = Jwt.sign({ id: islogin?._id }, privateKey, {
        expiresIn: "1d",
      });
      console.log("islogin:", islogin);
      if (islogin) {
        const matchpassword = await bcrypt.compare(password, islogin.password);
        if (matchpassword) {
          const data = {
            name: islogin?.username,
            id: islogin?._id,
            email: islogin?.email,
            profileImage: islogin?.profileImage,
            walletAddress: islogin?.wallet,
            role: Object.values(islogin?.role),
            banner: islogin?.banner,
            facebook: islogin?.facebook,
            instagram: islogin?.instagram,
            twitter: islogin?.twitter,
            linkdin: islogin?.linkdin,
          };

          return res.status(200).json({
            message: "user login successfully",
            status: "ok",
            token,
            data,
          });
        } else {
          res.status(201).json({
            message: "Please enter valid password",
            status: "error",
          });
        }
      } else {
        res.status(201).json({
          message: "Please enter valid email",
          status: "error",
        });
      }
    }
    if (address) {
      const islogin = await userModal.findOne({ wallet: address });
      const token = Jwt.sign({ id: islogin?._id }, privateKey);
      if (islogin) {

        const data = {
          name: islogin?.username,
          id: islogin?._id,
          email: islogin?.email,
          profileImage: islogin?.profileImage,
          walletAddress: islogin?.wallet,
          role: Object.values(islogin?.role),
          banner: islogin?.banner,
          facebook: islogin?.facebook,
          instagram: islogin?.instagram,
          twitter: islogin?.twitter,
          linkdin: islogin?.linkdin,
          favoritesList: islogin?.favoritesList,
          follows: islogin?.follows,
        };
        return res.status(200).json({
          message: "user login successfully with Wallet Address",
          status: "ok",
          token,
          data,
        });
      } else {
        return res.status(201).json({
          message: "Wallet address not exist , please first register",
          status: "error",
        });
      }
    } else {
      return res.status(201).json({
        message: "Please connect with wallet!",
        status: "error",
      });
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
