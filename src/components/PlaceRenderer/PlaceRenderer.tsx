import * as S from "./styles";
import SafeHtml from "../../elements/SafeHtml";

import Grid from "../Grid/Grid";
import GridItem from "../Grid/GridItem";
// to do: style this and remove import

import Carousel from "../Carousel/Carousel";
import { CarouselItem } from "../Carousel/Carousel";

interface ArticleProps {
  title: string;
  image: ImageProps;
  images: ImageProps[];
  // datePublished: string;
  content?: ContentProps; // string?
  continent?: ContinentProps;
  country?: CountryProps;
  thingsToDo?: ContentProps;
  tips?: ContentProps; //remove
  gettingTo?: ContentProps;
  gettingAround?: ContentProps;
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
  images,
  // datePublished,
  content,
  continent,
  country,
  thingsToDo,
  tips,
  gettingTo,
  gettingAround,
  whereToEat,
  whereToStay
}: ArticleProps) => {
  const gridItemColSpan = [12, 12, 6, 6];
  const gridItemColStart = [1, 1, 7, 7];
  const gridItemRowSpan = [ 1, 1, 4, 4];

  const imageCarousel = images.map((image: any, i) => {
    return (
        <CarouselItem>
          <img src={image.url} alt={title}/>
        </CarouselItem>
    );
  })

  // to do: const date = new Date(datePublished);
return (
      <>
        <GridItem colSpan={12} colStart={1}>
        <Grid columns={12}>
          <S.ElementGridItem colSpan={gridItemColSpan} colStart={1} rowSpan={1} rowStart={1}>
            <h2>{title}</h2>
            {/* to do: <h4>
            {date.toLocaleDateString(undefined, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
            </h4> */}
          </S.ElementGridItem>
          <S.ElementGridItem colSpan={gridItemColSpan} colStart={gridItemColStart} rowSpan={gridItemRowSpan} rowStart={[2, 2, 1, 1]}> PICTURE </S.ElementGridItem>
          <S.ElementGridItem colSpan={gridItemColSpan} colStart={1} rowSpan={[1, 1, 3, 3]} rowStart={[3, 3, 2, 2]}> <SafeHtml content={gettingTo ? gettingTo.html : ''}/> </S.ElementGridItem>
          <S.ElementGridItem colSpan={12} colStart={1} rowSpan={gridItemRowSpan} rowStart={[4, 4, 5, 5]}> <SafeHtml content={whereToStay ? whereToStay.html : ''}/> </S.ElementGridItem>
          <S.ElementGridItem colSpan={12} colStart={gridItemColStart} rowSpan={gridItemRowSpan} rowStart={5}> <SafeHtml content={whereToEat ? whereToEat.html : ''}/> </S.ElementGridItem>
          <S.ElementGridItem colSpan={12} colStart={1} rowSpan={gridItemRowSpan} rowStart={[6, 6, 9, 9]}> <SafeHtml content={thingsToDo ? thingsToDo.html : ''}/> </S.ElementGridItem>
        </Grid> 
        </GridItem>
        <S.CarouselGridItem colSpan={12} colStart={1}>
            <Carousel>{imageCarousel}</Carousel>
        </S.CarouselGridItem>
      </>
  );
};

export default PlaceRenderer;
