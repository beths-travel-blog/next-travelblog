import * as React from "react";
import Link from "next/link";

import * as S from "./styles";

interface BlogCardProps {
  title: string;
  countrySlug: string;
  placeSlug?: string;
  image: ImageProps;
  // datePublished: string;
  continent?: ContinentProps;
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
  countrySlug,
  placeSlug,
  image,
  // datePublished: string;
  continent,
}: BlogCardProps) => {
  
  const postLink = placeSlug ?
  "/" + continent?.slug + "/" + countrySlug + "/" + placeSlug :
  "/" + continent?.slug + "/" + countrySlug;
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
      </S.BlogTextContainer>
    </S.BlogCardContainer>
  );
};

export default BlogCard;
