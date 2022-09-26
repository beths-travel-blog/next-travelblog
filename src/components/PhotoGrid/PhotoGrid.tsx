import React from "react";

import Masonry from "./Masonry";

import Bungee from "../../../public/BlogPhotos/bungee.jpg";
import Footprints from "../../../public/BlogPhotos/footprints.jpg";
import Fraser from "../../../public/BlogPhotos/fraser.jpg";
import Grandcanyon from "../../../public/BlogPhotos/grandcanyon.jpg";
import Cali from "../../../public/BlogPhotos/cali.jpg";
import BlueLake from "../../../public/BlogPhotos/bluelake.jpg";
import NZswing from "../../../public/BlogPhotos/nzswing.jpg";
import QuadDesert from "../../../public/BlogPhotos/quaddesert.jpg";
import RiceFields from "../../../public/BlogPhotos/ricefields.jpg";
import Singapore from "../../../public/BlogPhotos/singapore.jpg";
import Skii from "../../../public/BlogPhotos/skii.jpg";
import Soller from "../../../public/BlogPhotos/soller.jpg";
import SunsetDesert from "../../../public/BlogPhotos/sunsetdesert.jpg";
import TimesSquare from "../../../public/BlogPhotos/timessquare.jpg";
import Trex from "../../../public/BlogPhotos/trex.jpg";
import Whitsundays from "../../../public/BlogPhotos/whitsundays.jpg";

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
  { src: Soller.src, alt: "" },
  { src: SunsetDesert.src, alt: "" },
  { src: TimesSquare.src, alt: "" },
  { src: Trex.src, alt: "" },
  { src: Whitsundays.src, alt: "" },
];

export default function PhotoGrid() {
  return (
    <Masonry minWidth={300}>
      {images.map((_image, i) => (
        <img
          src={images[i].src}
          alt={images[i].alt}
          width="100%"
          height="auto"
        />
      ))}
    </Masonry>
  );
}
