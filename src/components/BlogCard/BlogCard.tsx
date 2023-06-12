import * as React from "react";
import Link from "next/link";

import * as S from "./styles";

interface BlogCardProps {
  title: string;
  slug: string;
  image: ImageProps;
  // datePublished: string;
  continent?: ContinentProps;
  postPreview: string;
}

interface ImageProps {
  url: string;
}

interface ContinentProps {
  name?: string;
  slug?: string;
}

const BlogCard = ({
  title,
  slug,
  image,
  // datePublished: string;
  continent,
  postPreview,
}: BlogCardProps) => {
  const postLink = "/" + continent?.slug + "/" + slug;
  // const date = new Date(datePublished);

  return (
    <S.BlogCardContainer>
      <Link href={postLink}>
        <S.BlogCardImage src={image.url} alt={title} />
      </Link>
      <S.BlogTextContainer>
        <Link href={postLink}>
          <S.ArticleTitle>{title}</S.ArticleTitle>
        </Link>
        {continent?.slug && (
          <Link href={continent.slug}>
            <S.ContinentTitle>{continent.name}</S.ContinentTitle>
          </Link>
        )}
        {/* <span>
          {date.toLocaleDateString(undefined, {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span> */}
        <S.StyledSafeHtml content={postPreview.substring(0, 150) + "..."} />
      </S.BlogTextContainer>
    </S.BlogCardContainer>
  );
};

export default BlogCard;
