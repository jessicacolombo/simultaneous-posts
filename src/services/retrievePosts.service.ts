import { responsePosts } from "./../schemas/posts.schemas";
import { Post } from "./../entities/posts.entity";
import AppDataSource from "../data-source";

export const retrievePostsService = async () => {
  const postsRespository = AppDataSource.getRepository(Post);

  const posts = await postsRespository.find();

  const postsToShow = await responsePosts.validate(posts, {
    stripUnknown: true,
  });

  return postsToShow;
};
