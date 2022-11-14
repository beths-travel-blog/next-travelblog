import React from "react";
import styled from "styled-components";

import MasonryLayout from "./MasonryLayout";

import Bungee from "../../../public/TravelPhotos/bungee.jpg";
import VFootprints from "../../../public/TravelPhotos/V_footprints.jpg";
import Fraser from "../../../public/TravelPhotos/fraser.jpg";
import Grandcanyon from "../../../public/TravelPhotos/grandcanyon.jpg";
import Cali from "../../../public/TravelPhotos/cali.jpg";
import BlueLake from "../../../public/TravelPhotos/bluelake.jpg";
import NZswing from "../../../public/TravelPhotos/nzswing.jpg";
import VQuadDesert from "../../../public/TravelPhotos/V_quaddesert.jpg";
import VRiceFields from "../../../public/TravelPhotos/V_ricefields.jpg";
import Singapore from "../../../public/TravelPhotos/singapore.jpg";
import VSkii from "../../../public/TravelPhotos/V_skii.jpg";
import SunsetDesert from "../../../public/TravelPhotos/sunsetdesert.jpg";
import TimesSquare from "../../../public/TravelPhotos/timessquare.jpg";
import VTrex from "../../../public/TravelPhotos/V_trex.jpg";
import Whitsundays from "../../../public/TravelPhotos/whitsundays.jpg";
import Route from "../../../public/TravelPhotos/route.jpg";
import YosemiteLake from "../../../public/TravelPhotos/yosemitelake.jpg";
import Yosemite from "../../../public/TravelPhotos/yosemite.jpg";
import YosemiteView from "../../../public/TravelPhotos/V_yosemite.jpg";
import Monkey from "../../../public/TravelPhotos/V_monkey.jpg";
import Hoian from "../../../public/TravelPhotos/V_hoian.jpg";
import Hanoi from "../../../public/TravelPhotos/V_hanoi.jpg";
import Queenstown from "../../../public/TravelPhotos/queenstown.jpg";
import Temple from "../../../public/TravelPhotos/V_temple.jpg";

const images = [
  { src: Bungee.src, alt: "My bungee jump in Singapore" },
  { src: Grandcanyon.src, alt: "The Grandcanyon" },
  { src: Cali.src, alt: "Venice Beach" },
  { src: VFootprints.src, alt: "Footprints on a Scottish beach" },
  { src: BlueLake.src, alt: "A beautiful lake in New Zealand" },
  { src: NZswing.src, alt: "Canyon swing in New Zealand" },
  { src: VQuadDesert.src, alt: "Quad biking in Dubai" },
  { src: VRiceFields.src, alt: "Rice fields in Bali" },
  { src: Singapore.src, alt: "Singapore" },
  { src: VSkii.src, alt: "Skiing" },
  { src: Fraser.src, alt: "Fraser Island" },
  { src: Whitsundays.src, alt: "Whitsundays" },
  { src: SunsetDesert.src, alt: "Sunset in the desert" },
  { src: TimesSquare.src, alt: "Times Square, New York" },
  { src: VTrex.src, alt: "Bali" },
  { src: Route.src, alt: "Route 66" },
  { src: YosemiteLake.src, alt: "Beautiful lake in Yosemite" },
  { src: YosemiteView.src, alt: "Hiking in Yosemite" },
  { src: Hanoi.src, alt: "Railway track in Hanoi" },
  { src: Temple.src, alt: "Cambodian temples" },
  { src: Yosemite.src, alt: "Yosemite" },
  { src: Hoian.src, alt: "Lanterns in Hoi An" },
  { src: Monkey.src, alt: "Monkey in Bali" },
  { src: Queenstown.src, alt: "Queenstown, New Zealand" },
];

const StyledImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;

  @media (min-width: 900px) {
    height: 200px;
  }
`;

const PhotoGrid = () => {
  return (
    <MasonryLayout minWidth={300} gap={"10px"}>
      {images.map((_image, i) => (
        <StyledImage key={i} src={images[i].src} alt={images[i].alt} />
      ))}
    </MasonryLayout>
  );
};

export default PhotoGrid;
