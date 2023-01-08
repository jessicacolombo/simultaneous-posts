import { responsePost } from "./../schemas/posts.schemas";
import { Post } from "./../entities/posts.entity";
import AppDataSource from "../data-source";

export const createPostService = async (newPost) => {
  const postsRespository = AppDataSource.getRepository(Post);

  const createdPost = postsRespository.create(newPost);
  await postsRespository.save(createdPost);

  const postToShow = await responsePost.validate(createdPost, {
    stripUnknown: true,
  });

  return postToShow;
};
