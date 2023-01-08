import "express-async-errors";
import "reflect-metadata";
import express from "express";
import path from "path";
import "dotenv/config";
import { Server } from "socket.io";
import http from "http";
import { postsRoutes } from "./routes/posts.routes";
import { errorHandler } from "./errors/errorHandler";
import { retrievePostsService } from "./services/retrievePosts.service";
import { createPostService } from "./services/createPost.service";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.set("views", path.join(__dirname, "../public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

export const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  path: "/socket.io",
});

app.use("/", postsRoutes);
app.use(errorHandler);

io.on("connection", async (socket) => {
  console.log("connected to socket.io");

  const posts = await retrievePostsService();
  socket.emit("previousPosts", posts);

  socket.on("sendPost", async (data) => {
    await createPostService(data);
    socket.broadcast.emit("receivedPost", data);
  });
});

export default app;
