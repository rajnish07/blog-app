"use client";
import Image from "next/image";
import { useState } from "react";

const Post = ({ post }: { post: any }) => {
  const [react, setReact] = useState(false);

  return (
    <div
      className="max-w-[50rem] bg-gray-100 mx-auto mb-4 p-4 rounded-md cursor-pointer hover:bg-gray-200 transition shadow-md"
      data-testid="post"
    >
      <Image
        src={
          "https://buffer.com/library/content/images/2023/10/free-images.jpg"
        }
        alt="articl"
        width={800}
        height={40}
        className="w-full object-cover h-48 bg-gradient-to-r from-gray-400"
      />
      <div className="flex items-center gap-2 mt-2">
        <Image
          src={react ? "thumbs-up-2.svg" : "thumbs-up-1.svg"}
          alt="reaction"
          data-testid="react"
          width={20}
          height={20}
          onClick={() => {
            setReact(!react);
          }}
        />
        <span className="text-xs" data-testid="reactions">
          {react ? post.reactions + 1 : post.reactions}
        </span>
      </div>
      <h2 className="text-xl capitalize font-semibold hover:underline">
        {post.title}
      </h2>
      <div>
        {post.tags.map((tag: string, id: number) => (
          <span
            key={id}
            className="text-xs mr-2 bg-gray-700 text-white p-1 capitalize rounded-[0.2rem]"
            data-testid="post-tag"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
};

export default Post;
