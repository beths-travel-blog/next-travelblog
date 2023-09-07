import * as S from "./styles";
import SafeHtml from "../../elements/SafeHtml";

import Carousel from "../../components/Carousel/Carousel";
import { CarouselItem } from "../../components/Carousel/Carousel";

interface ArticleProps {
  title: string;
  image: ImageProps;
  images: ImageProps[];
  // datePublished: string;
  content?: ContentProps; // string?
  continent?: ContinentProps;
  country?: CountryProps;
  thingsToDo?: ContentProps;
  tips?: ContentProps;
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
  name?: string;
}

interface CountryProps {
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
  const gridItemColSpan = [10, 6, 6, 6];
  const gridItemColStart = [2, 4, 4, 4];

  const imageCarousel = images.map((image: any, i) => {
    return (
        <CarouselItem>
          <img src={image.url} alt={title}/>
        </CarouselItem>
    );
  })

  // const date = new Date(datePublished);
return (
      <>
        <S.ArticleInfoContainer
          colSpan={gridItemColSpan}
          colStart={gridItemColStart}
        >
          <h4> {continent && continent.name} </h4>
          <h4> {country && country.name} </h4>
          <h2>{title}</h2>
          {/* <h4>
            {date.toLocaleDateString(undefined, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </h4> */}
        </S.ArticleInfoContainer>
        <S.CarouselGridItem colSpan={12} colStart={1}>
            <Carousel>{imageCarousel}</Carousel>
        </S.CarouselGridItem>
        <S.ElementGridItem
          colSpan={gridItemColSpan}
          colStart={gridItemColStart}
        >
          <SafeHtml content={content ? content.html : ''} />
          <SafeHtml content={thingsToDo ? thingsToDo.html : ''} />
          <SafeHtml content={tips ? tips.html : ''} />
          <SafeHtml content={gettingTo ? gettingTo.html : ''} />
          <SafeHtml content={gettingAround ? gettingAround.html : ''} />
          <SafeHtml content={whereToEat ? whereToEat.html : ''} />
          <SafeHtml content={whereToStay ? whereToStay.html : ''} />
        </S.ElementGridItem>
      </>
  );
};

export default ArticleRenderer;
