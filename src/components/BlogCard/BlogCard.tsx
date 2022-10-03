import * as React from "react";

import Link from "next/Link";

interface BlogCardProps {
  title: string;
  slug: string;
  image: ImageProps;
  datePublished: any;
  category?: CategoryProps;
}

interface ImageProps {
  url: string;
}

interface CategoryProps {
  name?: string;
  slug?: string;
}

const BlogCard = ({
  title,
  slug,
  image,
  datePublished,
  category,
}: BlogCardProps) => {
  return (
    <div>
      <Link href={"/posts/" + slug}>
        <div>
          <h2>{title}</h2>
          <img src={image.url} alt="" />
        </div>
      </Link>
      {category?.slug && (
        <Link href={category.slug}>
          <div>{category.name}</div>
        </Link>
      )}
      <div>{datePublished}</div>
    </div>
  );
};

export default BlogCard;
