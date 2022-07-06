import { useRouter } from "next/router";
import posts from "../../article-content/mock-posts.json";
const Slug = () => {
  const router = useRouter();

  const post = posts[router.query.slug as keyof typeof posts];

  if (!post) return <p></p>;

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
};

export default Slug;
