import React from "react";
import styled from "styled-components";

import Grid from "../Grid/Grid";
import GridItem from "../Grid/GridItem";
import BlogCard from "../BlogCard/BlogCard";

export interface GridProps {
    blogPosts: BlogCardProps[];
    postGrid: boolean;
}
  
interface BlogCardProps {
  title: string;
  placeSlug: string;
  image: ImageProps;
  country?: CountryProps;
}

interface ImageProps {
  url: string;
}

interface CountryProps {
  title?: string;
  slug?: string;
  continent?: string;
}

interface ContinentProps {
  title?: string;
  slug?: string;
}

const StyledGrid = styled(Grid)`
  padding: 0 100px;
`
const StyledGridItem = styled(GridItem)`
  padding: 0 20px;
`

const BlogCardGrid = ({ blogPosts, postGrid }: GridProps) => {
  const gridItemColSpan = [12, 6, 4, 3];
  const totalColumns = 12;
  const gridItemRowOffset = 2;

  // to do: choose featured posts
  const blogCards = blogPosts.map((post: any, i: number) => {
    const colStart = gridItemColSpan.map(
      (colSpan) => (i % (totalColumns / colSpan)) * colSpan + 1
    );
    const rowStart = gridItemColSpan.map((colSpan) =>
      Math.floor(i / (totalColumns / colSpan) + gridItemRowOffset)
    );

    const postLink = postGrid ? "/" + post.country?.continent?.slug + "/" + post.country?.slug + "/" + post.slug : "/" + post.continent?.slug + "/" + post.slug; 
    return (
    <StyledGridItem colSpan={gridItemColSpan} rowStart={rowStart} colStart={colStart} key={i}>
      <BlogCard
        key={i}
        title={post.title}
        postLink={postLink}
        image={post.image}
      />
    </StyledGridItem>)
});

  return <StyledGrid columns={12} colGap={100}>
      {blogCards}
  </StyledGrid>;
};

export default BlogCardGrid;
