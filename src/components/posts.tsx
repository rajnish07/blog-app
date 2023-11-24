import React from "react";
import Post from "./Post/post";
import { API_DATA_LIMIT } from "@/utils/constants";

const Posts = async () => {
  const posts: unknown[] = await fetch(
    `https://dummyjson.com/posts?limit=${API_DATA_LIMIT}`,
    {
      headers: {
        cacheControl: "no-cache",
      },
    }
  )
    .then((data) => data.json())
    .then((result) => result.posts);

  await new Promise((resolve) => setTimeout(resolve, 600));

  return posts.map((post: any, idx: number) => (
    <Post post={post} key={post.id} />
  ));
};

export default Posts;
