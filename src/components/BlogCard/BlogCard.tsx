import * as React from "react";
import Link from "next/link";

import * as S from "./styles";

interface BlogCardProps {
  title: string;
  postLink: string;
  image: ImageProps;
}

interface ImageProps {
  url: string;
}

const BlogCard = ({
  title,
  postLink,
  image,
}: BlogCardProps) => {
  

  return (
    <S.BlogCardContainer>
      <Link href={postLink}>
        <S.BlogCardImage src={image.url} alt={title} />
      </Link>
      <S.BlogTextContainer>
        <Link href={postLink}>
          <S.ArticleTitle>{title}</S.ArticleTitle>
        </Link>
      </S.BlogTextContainer>
    </S.BlogCardContainer>
  );
};

export default BlogCard;
