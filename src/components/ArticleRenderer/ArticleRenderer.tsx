import * as S from "./styles";
import Grid from "../Grid/Grid";
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

// const widgetMap: any = {
//   imageCarousel: { component: ImageCarousel },
// };

// const widgetNodeRenderer = (
//   node: WidgetNode,
//   context: RendererContext,
//   index: number
// ) => {

//   // const widgetChildren =
//   //   node.props && "children" in node.props
//   //     ? nodeRenderer(node.props.children, context)
//   //     : {};

//   return React.createElement<any>(
//     widgetMap[node.type].component,
//     {
//       ...node.props,
//       key: index,
//     },
//     widgetChildren
//   );
// };

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
        <S.ImageGridItem colSpan={gridItemColSpan} colStart={gridItemColStart}>
          <img src={image.url} alt={title} width="100%" height="auto" />
        </S.ImageGridItem>
        <S.ElementGridItem
          colSpan={gridItemColSpan}
          colStart={gridItemColStart}
        >
          <SafeHtml content={content.html} />
        </S.ElementGridItem>
      </Grid>
    </main>
  );
};

export default ArticleRenderer;
