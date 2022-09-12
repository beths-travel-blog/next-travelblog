import React from "react";

import { useRouter } from "next/router";

import NavBar from "../src/components/NavBar/NavBar";
import posts from "../src/article-content/mock-posts.json";

const Slug = () => {
  const router = useRouter();

  const post = posts[router.query.slug as keyof typeof posts];

  if (!post) return <p></p>;

  return (
    <React.Fragment>
      <NavBar />
      <h1>{post.submenu[0].title}</h1>
      <p>{post.submenu[0].content}</p>
    </React.Fragment>
  );
};

export default Slug;
