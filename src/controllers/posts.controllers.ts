import { retrievePostsService } from "../services/retrievePosts.service";
import { createPostService } from "./../services/createPost.service";

export const createPostController = async (req, res) => {
  const newPost = await createPostService(req.body);
  return res.status(201).json(newPost);
};

export const retrivePostsController = async (req, res) => {
  const posts = await retrievePostsService();
  return res.status(200).json(posts);
};
