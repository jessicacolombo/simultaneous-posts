import { requestPost } from "./../schemas/posts.schemas";
import { ensureDataIsValid } from "./../middlewares/ensureDataIsValid.middleware";
import {
  createPostController,
  retrivePostsController,
} from "./../controllers/posts.controllers";
import { Router } from "express";

export const postsRoutes = Router();

postsRoutes.get("", (req, res) => {
  res.render("index.html");
});

postsRoutes.post(
  "/posts",
  ensureDataIsValid(requestPost),
  createPostController
);
postsRoutes.get("/posts", retrivePostsController);
