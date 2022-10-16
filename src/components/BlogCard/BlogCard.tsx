import * as React from "react";
import Link from "next/Link";

import * as S from "./styles";
import SafeHtml from "../../elements/SafeHtml";

interface BlogCardProps {
  title: string;
  slug: string;
  image: ImageProps;
  datePublished: string;
  category?: CategoryProps;
  postPreview: string;
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
  postPreview,
}: BlogCardProps) => {
  const postLink = "/" + category?.slug + "/" + slug;
  const date = new Date(datePublished);

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
        <span>
          {date.toLocaleDateString(undefined, {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>

        <SafeHtml content={postPreview} />
      </S.BlogTextContainer>
    </S.BlogCardContainer>
  );
};

export default BlogCard;
