import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
export const viewsRouter = express.Router();
import { viewCounter } from "../controler/viewsControllers/viewsCounter.js";
import { getViewCounter } from "../controler/viewsControllers/getViewCounter.js";

viewsRouter.post("/", viewCounter);
viewsRouter.get("/:id", getViewCounter);