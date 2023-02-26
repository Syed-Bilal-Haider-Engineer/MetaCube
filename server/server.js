 import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import connectDB from "./database.js";
import { router } from "./routs/buyCellRoute.js";
import { LikeRouter } from "./routs/likesList.js";
import { favRouter } from "./routs/favoriteRoutes.js";
import { viewsRouter } from "./routs/viewsRoutes.js";
import timeout from "connect-timeout";
import path from "path";
import cors from "cors";
import * as fs from 'fs'
import { ServerURL } from "./utils/url.js";
const app = express();
connectDB(process.env.DB_URL);
app.use(timeout("60000s"));
app.use(cors());
var __dirname = path.resolve();
var dir = path.join(__dirname, "upload");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 })
);

app.use(express.static("./build"));
app.use("/", router);
app.use("/likes", LikeRouter);
app.use("/favorites", favRouter);
app.use("/views", viewsRouter);
mongoose.set("strictQuery", true);
app.get("/*", function (req, res) {
  res.sendFile(path?.join(__dirname, "build", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});



//port 8080
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(ServerURL, `Server is running on the port ${port}`);

});

