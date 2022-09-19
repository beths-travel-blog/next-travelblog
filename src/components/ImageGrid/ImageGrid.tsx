import React from "react";

import * as S from "./styles";

export interface ImageGridProps {
  images: ImageGridProductProps[];
}

export interface ImageGridProductProps {
  src: any;
  lazy?: boolean;
}

const ImageGrid = (props: ImageGridProps) => {
  const items = props.images.map((product: ImageGridProductProps, index) => {
    return (
      <S.ImageGridItem key={index}>
        <img src={product.src} alt="" width="100%" height="auto" />
      </S.ImageGridItem>
    );
  });
  return <S.ImageGridWrapper>{items}</S.ImageGridWrapper>;
};

export default ImageGrid;
