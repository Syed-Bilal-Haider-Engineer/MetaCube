import userModal from "../modal/users.js";
import bcrypt from "bcrypt";
import sgMail from "@sendgrid/mail";
import { ServerURL } from "../utils/url.js";
export const register = async (req, res, next) => {
  try {
    const { username, email, password, wallet, latLng } = req.body;
    if (!username || !email || !password) {
      res.status(201).json({
        status: "error",
        message: "Please fill all fields !",
      });
    }
    const API_KEY =
      "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";
    sgMail.setApiKey(API_KEY);
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const existUser = await userModal.findOne({ $or: [{ email }, { wallet }] });
    if (existUser) {
      res.status(201).json({
        status: "error",
        message: "user already exist ! !",
      });
    } else {
      const user = await userModal.create({
        username,
        email,
        password: passwordHash,
        wallet,
        latLng,
      });
      if (user) {
        const link = `${ServerURL}/Emailverify/${user._id}`;
        const msg = {
          to: "subhan26902@gmail.com", // Change to your recipient
          from: {
            name: "Miner DAO Forum",
            email: "bilalshahbscs@gmail.com",
          },
          subject: `Land NFT and Mataverse`,
          text: `<p>Email is Sending from Meta cubes.</p>`,
          html: `<h2>Email verification link </h2> 
          <a href=${link}>Verify Your Email</a>    
          `,
        };
        sgMail
          .send(msg)
          .then(() => {
            console.log("Email sent");
          })
          .catch((error) => {
            console.error(error.message);
          });
        return res.status(201).json({
          status: "ok",
          message: "user add successfully and check email for verfications !",
        });
      } else {
        return res.status(201).json({
          status: "error",
          message: "your request failed !",
        });
      }
    }
  } catch (error) {
    console.log("error user create", error);
  }
};
