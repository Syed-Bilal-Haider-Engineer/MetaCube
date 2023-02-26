import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
export const LikeRouter = express.Router();
import { LikeList } from "../controler/likeControllers/likesList.js";
import { likeListGet } from "../controler/likeControllers/LikeListGet.js";

LikeRouter.post("/", LikeList);
LikeRouter.get("/:id", likeListGet);
