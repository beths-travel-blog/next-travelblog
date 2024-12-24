import * as S from "./styles";
import SafeHtml from "../../elements/SafeHtml";

import Grid from "../Grid/Grid";
import GridItem from "../Grid/GridItem";
// to do: style this and remove import

// import Carousel from "../Carousel/Carousel";
// import { CarouselItem } from "../Carousel/Carousel";

interface ArticleProps {
  title: string;
  image: ImageProps;
  images: ImageProps[];
  // datePublished: string;
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
  images,
  // datePublished,
  thingsToDo,
  whereToEat,
  whereToStay
}: ArticleProps) => {
  const gridItemColSpan = [12, 12, 6, 6];

  // const imageCarousel = images.map((image: any, i) => {
  //   return (
  //       <CarouselItem>
  //         <img src={image.url} alt={title}/>
  //       </CarouselItem>
  //   );
  // })

  // to do: const date = new Date(datePublished);
  // to do: make this look less messy
  // remove outer griditem?
return (
      <>
        <GridItem colSpan={12} colStart={1}>
          {/* to do:
          <h4>
            {date.toLocaleDateString(undefined, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </h4> */}
        <S.ContentGrid columns={12} rows={12}>
          <S.ContentGridItem
            colSpan={gridItemColSpan}
            colStart={1}
            rowSpan={2}
            rowStart={1}>
            <h1>{title}</h1>
          </S.ContentGridItem>
          <S.ContentGridItem
            colSpan={gridItemColSpan}
            colStart={1}
            rowSpan={3}
            rowStart={3}>
            <SafeHtml content={whereToStay ? whereToStay.html : ''}/>
          </S.ContentGridItem>
          <S.ContentGridItem
            colSpan={gridItemColSpan}
            colStart={[1, 1, 7, 7]}
            rowSpan={5}
            rowStart={[6, 6, 1, 1]}>
            <h2> Where To Eat </h2>
            <SafeHtml content={whereToEat ? whereToEat.html : ''}/>
          </S.ContentGridItem>
          <S.ContentGridItem
            colSpan={12}
            colStart={1}
            rowSpan={2}
            rowStart={[11, 11, 6, 6]}>
            <SafeHtml content={thingsToDo ? thingsToDo.html : ''}/>
          </S.ContentGridItem>
        </S.ContentGrid> 
        </GridItem>
        {/* <S.CarouselGridItem colSpan={12} colStart={1}>
            <Carousel>{imageCarousel}</Carousel>
        </S.CarouselGridItem> */}
      </>
  );
};

export default PlaceRenderer;
