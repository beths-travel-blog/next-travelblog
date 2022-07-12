import React from "react";

import { useRouter } from "next/router";

import Header from "../src/components/Header/Header";
import posts from "../src/article-content/mock-posts.json";

const Slug = () => {
  const router = useRouter();

  const post = posts[router.query.slug as keyof typeof posts];

  if (!post) return <p></p>;

  return (
    <React.Fragment>
      <Header />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </React.Fragment>
  );
};

export default Slug;
