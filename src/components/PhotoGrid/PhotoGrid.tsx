import React from "react";

import MasonryLayout from "./MasonryLayout";

import Bungee from "../../../public/TravelPhotos/bungee.jpg";
import Footprints from "../../../public/TravelPhotos/footprints.jpg";
import Fraser from "../../../public/TravelPhotos/fraser.jpg";
import Grandcanyon from "../../../public/TravelPhotos/grandcanyon.jpg";
import Cali from "../../../public/TravelPhotos/cali.jpg";
import BlueLake from "../../../public/TravelPhotos/bluelake.jpg";
import NZswing from "../../../public/TravelPhotos/nzswing.jpg";
import QuadDesert from "../../../public/TravelPhotos/quaddesert.jpg";
import RiceFields from "../../../public/TravelPhotos/ricefields.jpg";
import Singapore from "../../../public/TravelPhotos/singapore.jpg";
import Skii from "../../../public/TravelPhotos/skii.jpg";
import Soller from "../../../public/TravelPhotos/soller.jpg";
import SunsetDesert from "../../../public/TravelPhotos/sunsetdesert.jpg";
import TimesSquare from "../../../public/TravelPhotos/timessquare.jpg";
import Trex from "../../../public/TravelPhotos/trex.jpg";
import Whitsundays from "../../../public/TravelPhotos/whitsundays.jpg";
import Route from "../../../public/TravelPhotos/route.jpg";
import YosemiteLake from "../../../public/TravelPhotos/yosemitelake.jpg";
import Yosemite from "../../../public/TravelPhotos/yosemite.jpg";

const images = [
  { src: Bungee.src, alt: "My bungee jump in Singapore" },
  { src: Grandcanyon.src, alt: "" },
  { src: Cali.src, alt: "" },
  { src: Footprints.src, alt: "" },
  { src: BlueLake.src, alt: "" },
  { src: NZswing.src, alt: "" },
  { src: QuadDesert.src, alt: "" },
  { src: RiceFields.src, alt: "" },
  { src: Singapore.src, alt: "" },
  { src: Skii.src, alt: "" },
  { src: Fraser.src, alt: "" },
  { src: Whitsundays.src, alt: "" },
  { src: SunsetDesert.src, alt: "" },
  { src: TimesSquare.src, alt: "" },
  { src: Trex.src, alt: "" },
  { src: Soller.src, alt: "" },
  { src: Yosemite.src, alt: "" },
  { src: Route.src, alt: "" },
  { src: YosemiteLake.src, alt: "" },
];

export default function PhotoGrid() {
  return (
    <MasonryLayout minWidth={300}>
      {images.map((_image, i) => (
        <img
          src={images[i].src}
          alt={images[i].alt}
          width="100%"
          height="auto"
        />
      ))}
    </MasonryLayout>
  );
}
