import * as S from "./styles";
import SafeHtml from "../../elements/SafeHtml";

interface ArticleProps {
  title: string;
  image: ImageProps;
  datePublished: string;
  continent?: ContinentProps;
  country?: CountryProps;
  thingsToDo?: ContentProps;
  whereToEat?: ContentProps;
  whereToStay?: ContentProps;
}

interface ContentProps {
  html: string;
}

interface ImageProps {
  url: string;
}

interface ContinentProps {
  title?: string;
}

interface CountryProps {
  title?: string;
}

const PlaceRenderer = ({
  title,
  image,
  datePublished,
  thingsToDo,
  whereToEat,
  whereToStay
}: ArticleProps) => {
  const gridItemColSpan = [12, 12, 6, 6];
  const date = new Date(datePublished);

return (
      <>
          <S.TitleImageContainer
            url={image.url}
            colSpan={gridItemColSpan}
            colStart={1}
            rowSpan={3}
            rowStart={1}
            >
            <h1>{title}</h1>
            <h4>
                {date.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
          </h4>
          </S.TitleImageContainer>
          <S.ContentGridItem
            colSpan={gridItemColSpan}
            colStart={1}
            rowSpan={2}
            rowStart={4}>
            <S.ElementTitle> Where To Stay </S.ElementTitle>
            <SafeHtml content={whereToStay ? whereToStay.html : ''}/>
          </S.ContentGridItem>
          <S.ContentGridItem
            colSpan={gridItemColSpan}
            colStart={[1, 1, 7, 7]}
            rowSpan={5}
            rowStart={[6, 6, 1, 1]}>
            <S.ElementTitle> Where To Eat </S.ElementTitle>
            <SafeHtml content={whereToEat ? whereToEat.html : ''}/>
          </S.ContentGridItem>
          <S.ContentGridItem
            colSpan={12}
            colStart={1}
            rowSpan={2}
            rowStart={[11, 11, 6, 6]}>
            <S.ElementTitle> What to Do </S.ElementTitle>
            <SafeHtml content={thingsToDo ? thingsToDo.html : ''}/>
          </S.ContentGridItem>
      </>
  );
};

export default PlaceRenderer;
