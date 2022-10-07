import * as React from "react";
import Link from "next/Link";

import * as S from "./styles";

interface BlogCardProps {
  title: string;
  slug: string;
  image: ImageProps;
  datePublished: string;
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
  const postLink = "/" + category?.slug + "/" + slug;

  return (
    <S.BlogCardContainer>
      <Link href={postLink}>
        <S.BlogCardImage src={image.url} alt="" />
      </Link>
      <S.BlogTextContainer>
        <Link href={postLink}>
          <h2>{title}</h2>
        </Link>
        {category?.slug && (
          <Link href={category.slug}>
            <h3>{category.name}</h3>
          </Link>
        )}
        <span>{datePublished}</span>
      </S.BlogTextContainer>
    </S.BlogCardContainer>
  );
};

export default BlogCard;
