import { iRequestPost, iPost } from "./../interfaces/posts.interfaces";
import * as yup from "yup";
import { SchemaOf } from "yup";

export const requestPost: SchemaOf<iRequestPost> = yup.object().shape({
  content: yup.string().required(),
  username: yup.string().required(),
});

export const responsePost: SchemaOf<iPost> = yup.object().shape({
  id: yup.string().required(),
  content: yup.string().required(),
  username: yup.string().required(),
  createdAt: yup.string().required(),
  updatedAt: yup.string().notRequired(),
});

export const responsePosts: SchemaOf<iPost[]> = yup.array(responsePost);
