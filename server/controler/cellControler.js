import cellModal from "../modal/buycells.js";
import userModal from "../modal/users.js";
import * as fs from 'fs'
// const fsPromises = require('fs').promises;
import { v4 } from "uuid";
import { adminTransaction } from "../utils/backendtransaction.js";
import { checkOutHandler } from "./checkout.js";
import ethers from "ethers";
import { Contract } from "ethers";
import { Abi } from "../Abi/abimap.js";
import { ServerURL } from "../utils/url.js";
import {
  CONTRACT_ADDRESS,
  KEY,
  WALLET_KEY,
} from "../environment/index.js";
// import pendingTransactionsModal from "../modal/pendingTransactions.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
var __filename = fileURLToPath(import.meta.url);
var reqPath = dirname(__filename);
let __dirname = path.join(reqPath, "..");
const provider = new ethers.providers.JsonRpcProvider(KEY);
const voidAccount = new ethers.VoidSigner(WALLET_KEY, provider);
const getData = async (_address, _ABI, _voidAccount) => {
  const constractAddress = await new Contract(_address, _ABI, _voidAccount);
  const tokenId = (await constractAddress) && constractAddress?.totalSupply();
  return tokenId;
};
export const buyCell = async (req, res) => {
  try {
    const {
      snapshot,
      user,
      lang,
      long,
      tilePrice,
      areaLength,
      totalceil,
      address,
      discount,
      token,
      type,
      mapaddress,
    } = req.body;
    let price = Number(areaLength) * Number(tilePrice) - +discount;
    price = await price.toFixed(2);
    let productPrice = +price;
    if (type === "stripe") {
      const _tokenId = await getData(CONTRACT_ADDRESS, Abi, voidAccount);
      const product = {
        name: " MetaCubes Nft",
        price: +price * 100,
        description: "This is a MetaCubes Nft.",
      };
      const { charge, customer } = await checkOutHandler(product, token);
      if (charge && charge.status) {
        let base64Image = snapshot.split(";base64,").pop();
        let contractId = Math.random() * 10;
        const uuidV4 = v4();
        let filename = `${uuidV4}.png`;
        await fs.writeFile(
          path.join(__dirname, "upload", `${filename}`),
          base64Image,
          { encoding: "base64" },
          function (err) {
            if (err) throw err;
            console.log("File is created successfully.");
          }
        );
        const newCell = await new cellModal({
          MinType: "stripe",
          nftId: +_tokenId + 1,
          name: product.name,
          capturesImage: filename,
          image: `${ServerURL}/upload/${filename}`,
          description: product.description,
          attributes: JSON.parse(totalceil),
          mapaddress,
          user,
          lang,
          long,
          contractId,
          tilePrice,
          address: address,
          tokenID: token.id,
          customerId: customer.id,
          paidStatusStripe: charge?.paid,
          productTotalPrice: +productPrice,
          paidStatusContract: false,
        });
        let resCell = await newCell.save();
        if (resCell) {
          let tokenuri = `${ServerURL}/tokenId/${+_tokenId + 1}`;
          const transactionDetails = await adminTransaction(address, tokenuri);
          var { transaction, trx, err } = transactionDetails;
          if (transaction === "successful" && trx) {
            const updateStatus = await cellModal.findByIdAndUpdate(
              { _id: resCell._id },
              { paidStatusContract: true }
            );
            if (updateStatus) {
              return res.json({
                status: "ok",
                data: true,
                message:
                  "Land NFT buy request is pending ,Please wait transaction confirmation you can check from your profile!",
              });
            }
          } else {
            const updateStatus = await cellModal.findByIdAndUpdate(
              { _id: resCell._id },
              { paidStatusContract: false }
            );
            return res.json({
              status: "failed",
              transaction,
              trx,
              message: err,
            });
          }
        } else {
          return res.json({
            status: "error",
            message: "Server issue",
          });
        }
      }
    }
  } catch (err) {
    console.log(err.message);
    return res.json({
      status: "failed",
      message: err.message || err,
    });
  }
};
// .........Transaction with wallet..........;
export const buyCellWithWallet = async (req, res) => {
  try {
    const {
      snapshot,
      user,
      lang,
      long,
      tilePrice,
      areaLength,
      totalceil,
      address,
      token,
      nftAmount,
      type,
      mapaddress,
    } = req.body;
    const _tokenId = await getData(CONTRACT_ADDRESS, Abi, voidAccount);

    if (type === "wallet") {
      let receipt = null;
      while (receipt === null) {
        receipt = await provider.getTransactionReceipt(token);
        let contractId = Math.random() * 10;
        if (receipt?.status) {
          let base64Image = snapshot.split(";base64,").pop();
          const uuidV4 = v4();
          let filename = `${uuidV4}.png`;
          fs.writeFile(
            path.join(__dirname, "upload", `${filename}`),
            base64Image,
            { encoding: "base64" },
            function (err) {
              if (err) throw err;
              console.log("File is created successfully.");
            }
          );
          let cellAmount = +nftAmount / 1000000;
          const newCell = await new cellModal({
            MinType: "wallet",
            nftId: +_tokenId + 1,
            name: "MetaCubes Nft",
            capturesImage: filename,
            image: `${ServerURL}/upload/${filename}`,
            description: "This is a MetaCubes Nft.",
            attributes: JSON.parse(totalceil),
            mapaddress,
            user,
            lang,
            long,
            contractId,
            tilePrice,
            address: address,
            tokenID: "",
            customerId: "",
            paidStatusStripe: false,
            productTotalPrice: cellAmount,
            paidStatusContract: false,
            paidByWallet: true,
          });
          let resCell = await newCell.save();
          if (resCell) {
            if (resCell) {
              let tokenuri = `${ServerURL}/tokenId/${+_tokenId + 1}`;
              const transactionDetails = await adminTransaction(
                address,
                tokenuri
              );
              const { transaction, trx, err } = transactionDetails;
              if (transaction === "successful" && trx) {
                const updateStatus = await cellModal.findByIdAndUpdate(
                  { _id: resCell._id },
                  { paidStatusContract: true }
                );
                if (updateStatus) {
                  return res.json({
                    status: "ok",
                    data: true,
                    message:
                      "Land NFT buy request is pending ,Please wait transaction confirmation you can check from your profile!",
                  });
                }
              } else {
                const updateStatus = await cellModal.findByIdAndUpdate(
                  { _id: resCell._id },
                  { paidStatusContract: false }
                );

                return res.json({
                  status: "failed",
                  transaction,
                  trx,
                  message: err,
                });
              }
            } else {
              return res.json({
                status: "error",
                message: "Server issue",
              });
            }
          }
        }
      }
    }
  } catch (err) {
    console.log(err.message);
    return res.json({
      status: "failed",
      message: err.message || err,
    });
  }
};

// ----------------> get all cells Data <------------------
export const getBuyCells = async (req, res) => {
  try {
    const nfts = await cellModal
      .find({ paidStatusContract: true })
      .populate("user", ["email", "username", "profileImage", "role"]);
    const failedNfts = await cellModal
      .find({ paidStatusContract: false })
      .populate("user", ["email", "username", "profileImage", "role"]);
    return res.status(200).json({ nfts, failedNfts });
  } catch (err) {
    return res.status(500).json(err);
  }
};
export const getUserNfts = async (req, res) => {
  try {
    const address = req.query.address;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const count = await cellModal.find({ address });
    let totalPages = Math.ceil(count?.length / limit);
    let data = await cellModal
      .find({ address })
      .populate({
        path: "user",
        select: ["email", "username", "profileImage", "role"],
      })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    if (data) {
      return res.status(200).json({
        status: "ok",
        data,
        totalPages,
        currentPage: page,
      });
    } else {
      return res.json({
        status: "error",
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getTokenIds = async (req, res) => {
  try {
    const { id } = req.params;
    cellModal
      .find({ nftId: id })
      .select("nftId image  name  description attributes")
      .then((data) => {
        return res.status(200).json(data);
      });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getNftsdetails = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = await cellModal
      .findById({ _id: id })
      .select("-password");
    return res.status(200).json(updateData);
  } catch (error) {
    return res.status(500).json(error);
  }
};
//........NFts Mint failed.........
export const mintFailNft = async (req, res) => {
  const { _id, address } = req.body;
  try {
    const _tokenId = await getData(CONTRACT_ADDRESS, Abi, voidAccount);

    if (_tokenId) {
      let tokenuri = `${ServerURL}/tokenId/${+_tokenId + 1}`;
      const transactionDetails = await adminTransaction(address, tokenuri);
      const { transaction, trx, message } = transactionDetails;
      if (transaction === "successful" && trx) {
        const updateStatus = await cellModal.findByIdAndUpdate(
          { _id },
          { paidStatusContract: true }
        );
        if (updateStatus) {
          const nfts = await cellModal
            .find({ paidStatusContract: true })
            .populate("user", ["email", "username", "profileImage", "role"]);
          const failedNfts = await cellModal
            .find({ paidStatusContract: false })
            .populate("user", ["email", "username", "profileImage", "role"]);
          return res.json({
            status: "ok",
            data: true,
            message: "NFT mint successfully!",
            nftes: { nfts, failedNfts },
          });
        }
      } else {
        return res.json({
          status: "error",
          data: false,
          message: "something went wrong",
        });
      }
    }
  } catch (error) {
    return res.json({
      message: "server issue",
    });
  }
};

// .........Transaction with wallet  by admin..........;
export const mintNftByAdmin = async (req, res) => {
  try {
    let { address: wallet } = req.body;
    const {
      snapshot,
      user,
      lang,
      long,
      tilePrice,
      areaLength,
      totalceil,
      address,
      token,
      nftAmount,
      type,
      mapaddress,
    } = req.body;

    const userdata = await userModal.findOne({ wallet });
    if (userdata) {
      const _tokenId = await getData(CONTRACT_ADDRESS, Abi, voidAccount);
      if (type === "admin") {
        let receipt = null;
        while (receipt === null) {
          receipt = await provider.getTransactionReceipt(token);
          let contractId = Math.random() * 10;
          if (receipt?.status) {
            let base64Image = snapshot.split(";base64,").pop();
            const uuidV4 = v4();
            let filename = `${uuidV4}.png`;
            fs.writeFile(
              path.join(__dirname, "upload", `${filename}`),
              base64Image,
              { encoding: "base64" },
              function (err) {
                if (err) throw err;
                console.log("File is created successfully.");
              }
            );
            let cellAmount = +nftAmount / 1000000;
            const newCell = await new cellModal({
              MinType: "wallet",
              nftId: +_tokenId + 1,
              name: "Global Land Nft",
              capturesImage: filename,
              image: `${ServerURL}/upload/${filename}`,
              description: "this is a global land Nft product",
              attributes: JSON.parse(totalceil),
              mapaddress,
              user: userdata?._id,
              lang,
              long,
              contractId,
              tilePrice,
              address: address,
              tokenID: "",
              customerId: "",
              paidStatusStripe: false,
              productTotalPrice: cellAmount,
              paidStatusContract: false,
              paidByWallet: true,
            });
            let resCell = await newCell.save();
            if (resCell) {
              if (resCell) {
                let tokenuri = `${ServerURL}/tokenId/${+_tokenId + 1}`;
                const transactionDetails = await adminTransaction(
                  address,
                  tokenuri
                );
                const { transaction, trx, message } = transactionDetails;
                if (transaction === "successful" && trx) {
                  const updateStatus = await cellModal.findByIdAndUpdate(
                    { _id: resCell._id },
                    { paidStatusContract: true }
                  );
                  if (updateStatus) {
                    return res.json({
                      status: "ok",
                      data: true,
                      message:
                        "NFT Mint by Admin ,Please wait transaction confirmation you can check from your profile!",
                    });
                  }
                } else {
                  const updateStatus = await cellModal.findByIdAndUpdate(
                    { _id: resCell._id },
                    { paidStatusContract: false }
                  );

                  return res.json({
                    transaction,
                    trx,
                    message: "something went wrong",
                  });
                }
              } else {
                return res.json({
                  status: "error",
                  message: "Server issue",
                });
              }
            }
          }
        }
      }
    } else {
      return res.json({
        status: "error",
        message: "user is not exist or address is  invalid !",
        adminMint: false,
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};



