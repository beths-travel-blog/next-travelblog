import * as S from "./styles";
import Grid from "../Grid/Grid";
import GridItem from "../Grid/GridItem";
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
  category,
}: ArticleProps) => {
  const gridItemColSpan = [10, 6, 6, 6];
  const gridItemColStart = [2, 4, 4, 4];

  const date = new Date(datePublished);
  return (
    <main>
      <Grid columns={12}>
        <S.ArticleInfoContainer
          colSpan={gridItemColSpan}
          colStart={gridItemColStart}
        >
          <h4> {category && category.name} </h4>
          <h2>{title}</h2>
          <h4>
            {date.toLocaleDateString(undefined, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </h4>
        </S.ArticleInfoContainer>
        <GridItem colSpan={gridItemColSpan} colStart={gridItemColStart}>
          <img src={image.url} alt={title} width="100%" height="auto" />
        </GridItem>
        <S.ElementGridItem
          colSpan={gridItemColSpan}
          colStart={gridItemColStart}
        >
          <div></div>
          <SafeHtml content={content.html} />
        </S.ElementGridItem>
      </Grid>
    </main>
  );
};

export default ArticleRenderer;
