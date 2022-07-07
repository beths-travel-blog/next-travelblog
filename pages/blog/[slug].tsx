import { useRouter } from "next/router";

import NavBar from "../../components/NavBar";
import posts from "../../article-content/mock-posts.json";
import React from "react";

const Slug = () => {
  const router = useRouter();

  const post = posts[router.query.slug as keyof typeof posts];

  if (!post) return <p></p>;

  return (
    <React.Fragment>
      <NavBar />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </React.Fragment>
  );
};

export default Slug;
