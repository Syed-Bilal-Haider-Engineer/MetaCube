import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
export const favRouter = express.Router();
import { getFavList } from "../controler/favoriteControllers/getFavList.js";
import { favoritesList } from "../controler/favoriteControllers/favoriteList.js";

favRouter.post("/", favoritesList);
favRouter.get("/:nftId", getFavList);
