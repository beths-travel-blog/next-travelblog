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
        <S.BlogImageContainer>
          <S.BlogCardImage src={image.url} alt="" />
        </S.BlogImageContainer>
      </Link>
      <S.BlogTextContainer>
        <Link href={postLink}>
          <h2>{title}</h2>
        </Link>
        {category?.slug && <Link href={category.slug}>{category.name}</Link>}
        {datePublished}
      </S.BlogTextContainer>
    </S.BlogCardContainer>
  );
};

export default BlogCard;
