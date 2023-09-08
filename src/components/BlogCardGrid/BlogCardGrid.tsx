import React from "react";

import Grid from "../../../src/components/Grid/Grid";
import GridItem from "../../../src/components/Grid/GridItem";
import BlogCard from "../../../src/components/BlogCard/BlogCard";

export interface GridProps {
    blogPosts: postProps[];
}
  
interface postProps {
    title: string;
    slug: string;
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

const BlogCardGrid = ({ blogPosts }: GridProps) => {
  const gridItemColSpan = [12, 6, 4, 3];
  const totalColumns = 12;
  const gridItemRowOffset = 2;
  const blogCards = blogPosts.map((post: any, i: number) => {
    const colStart = gridItemColSpan.map(
      (colSpan) => (i % (totalColumns / colSpan)) * colSpan + 1
    );
    const rowStart = gridItemColSpan.map((colSpan) =>
      Math.floor(i / (totalColumns / colSpan) + gridItemRowOffset)
    );

    return (
    <GridItem colSpan={gridItemColSpan} rowStart={rowStart} colStart={colStart} key={i}>
      <BlogCard
        key={i}
        title={post.title}
        countrySlug={post.slug}
        image={post.image}
        // datePublished={post.datePublished}
        continent={post.continent}
      />
    </GridItem>)
});

  return <Grid columns={12} colGap={100}>
      {blogCards}
  </Grid>;
};

export default BlogCardGrid;
