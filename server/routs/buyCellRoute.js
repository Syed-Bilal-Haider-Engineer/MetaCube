import {
  buyCell,
  getBuyCells,
  buyCellWithWallet,
  getUserNfts,
  getTokenIds,
  getNftsdetails,
  mintFailNft,
  mintNftByAdmin,
} from "../controler/cellControler.js";
import { headerImage } from "../controler/UserProfile/headerImageUpdate.js";
import express from "express";
import { tokenverify } from "../controler/Tokenverify.js";
import { login } from "../controler/login.js";
import { register } from "../controler/Register.js";
import { verifyemail } from "../controler/MailAndPassword/Emailverfiy.js";
import { updateNFT } from "../controler/UpdateNFT/UpdateNfts.js";
import { updateProfile } from "../controler/UserProfile/EditeUserProfile.js";
import { voteCounter } from "../controler/votesControlers/voteCounter.js";
import { getVoteCounter } from "../controler/votesControlers/getVoteCounter.js";
import { getFavListPost } from "../controler/favoriteControllers/favouirtePost.js";
import promoAdd from "../controler/promosControllers/promoAdd.js";
import getPromos from "../controler/promosControllers/getPromo.js";
import deletePromos from "../controler/promosControllers/deletePromos.js";
import singlePromo from "../controler/promosControllers/singlePromo.js";
import followers from "../controler/followController/followCreate.js";
import multer from "multer";
import { fetchalluser } from "../controler/Fetchusers/fetchallusers.js";
import { checkuser } from "../controler/Fetchusers/Checkuser.js";
import { fetchFollowNfts } from "../controler/followController/FetchFollowNfts.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { allNftsOnScroll } from "../controler/getDataOfLikeAndFetch/allNftOfUser.js";
import { favoriteNftOnScroll } from "../controler/getDataOfLikeAndFetch/favoriteNftOfUser.js";
import { followNftList } from "../controler/getDataOfLikeAndFetch/followNftOfUser.js";
import { allNftsForAdmin } from "../controler/getDataOfLikeAndFetch/allNftForAdmin.js";
import { FailedNftsList } from "../controler/Failed/failednftlist.js";

var __filename = fileURLToPath(import.meta.url);
var reqPath = dirname(__filename);
let __dirname = path.join(reqPath, "..");
// console.log(__dirname, "dirName-->");
// var __dirname = path.resolve(path.dirname(""));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "upload"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + Math.random() + "-" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
});
export const router = express.Router();

//.........Post routes here.........
router.post("/buyCellbyWallet", buyCellWithWallet);
router.post("/mintNftByAdmin", mintNftByAdmin);
router.post("/buyCell", buyCell);
router.post("/verifytoken", tokenverify);
router.post("/login", login);
router.post("/register", register);
router.post("/mailverify", verifyemail);
router.get("/useNfts", getUserNfts);
router.post("/mintfailedNft", mintFailNft);
//.......Update user profile............
router.put("/updateProfile", upload.single("file"), updateProfile);
router.put("/updateNFT", upload.single("file"), updateNFT);
router.put("/updateBanner", upload.single("file"), headerImage);
//......Get routes........
router.get("/getBuyCells", getBuyCells);
router.get("/getnftsdetails/:id", getNftsdetails);

//get tokenIds........
router.get("/tokenId/:id", getTokenIds);
router.get("/alluser", fetchalluser);
router.get("/checkuser/:address", checkuser);
//....favourite.....
router.get("/favouritNfts/:id", getFavListPost);
// votes router
router.post("/vote", voteCounter);
router.get("/vote/:id", getVoteCounter);
// promo apis
router.post("/promo", promoAdd);
router.get("/promo", getPromos);
router.delete("/promo/:id", deletePromos);
router.get("/promo/:promoId", singlePromo);
// followers
router.post("/followers", followers);
router.post("/fetchFollowNfts", fetchFollowNfts);
router.get("/allNftsOnScroll", allNftsOnScroll);
router.get("/favoriteNftOnScroll", favoriteNftOnScroll);
router.get("/followNftList", followNftList);
router.get("/failedNfts", FailedNftsList);
router.get("/allNftForAdmin", allNftsForAdmin);
