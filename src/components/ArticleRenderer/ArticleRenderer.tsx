import styled from "styled-components";
import moment from "moment";

import Grid from "../Grid/Grid";
import { ElementGridItem } from "./styles";
import SafeHtml from "../../elements/SafeHtml";

interface ArticleProps {
  title: string;
  image: ImageProps;
  datePublished: string;
  content: any; // string?
  category?: CategoryProps;
}

interface ImageProps {
  url: string;
}

interface CategoryProps {
  name?: string;
}

const ArticleRenderer = ({
  title,
  image,
  datePublished,
  content,
}: //   category,
ArticleProps) => {
  const gridItemColSpan = [10, 6, 6, 6];
  const gridItemColStart = [2, 4, 4, 4];
  return (
    <main>
      <h2>{title}</h2>
      <img src={image.url} alt={title} />
      <Grid columns={12}>
        <ElementGridItem colSpan={gridItemColSpan} colStart={gridItemColStart}>
          <div>
            <h6>{moment(datePublished).format("MMMM d, YYYY")}</h6>
          </div>
          <SafeHtml content={content.html} />
        </ElementGridItem>
      </Grid>
    </main>
  );
};

export default ArticleRenderer;
