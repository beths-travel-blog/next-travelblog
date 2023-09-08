import * as React from "react";
import Link from "next/link";

import * as S from "./styles";

interface BlogCardProps {
  title: string;
  postLink: string;
  image: ImageProps;
  // datePublished: string;
}

interface ImageProps {
  url: string;
}

const BlogCard = ({
  title,
  postLink,
  image,
  // datePublished: string;
}: BlogCardProps) => {
  
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
        {/* {continent?.slug && (
          <Link href={continent.slug}>
            <S.ContinentTitle>{continent.name}</S.ContinentTitle>
          </Link>
        )} */}
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
