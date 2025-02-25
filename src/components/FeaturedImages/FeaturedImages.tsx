// import React from "react";
// import Image from "next/image";
// import styled from "styled-components";

// import Grid from "../Grid/Grid";
// import GridItem from "../Grid/GridItem";

// import Bungee from "../../../public/TravelPhotos/bungee.jpg";
// import Fraser from "../../../public/TravelPhotos/fraser.jpg";

// const StyledGrid = styled(Grid)`
//   margin: 10px 15px;

//   @media (min-width: 900px) {
//     margin: 10px 30px;
//   }
// `;

// const StyledGridItem = styled(GridItem)`
//   margin: 5px 0;

//   @media (min-width: 900px) {
//     margin: 0 5px;
//   }
// `;

// const FeaturedImages = () => {
//   const imageAttributes = [
//     {
//       src: Bungee.src,
//       alt: "",
//     },
//     {
//       src: Fraser.src,
//       alt: "",
//     },
//   ];

//   const gridItemColSpan = [12, 12, 4, 4];
//   const totalColumns = 12;
//   const gridItemRowOffset = 2;
//   const images = imageAttributes.map((item, index) => {
//     const src = item.src;
//     const alt = item.alt;
//     const colStart = gridItemColSpan.map(
//       (colSpan) => (index % (totalColumns / colSpan)) * colSpan + 1
//     );
//     const rowStart = gridItemColSpan.map((colSpan) =>
//       Math.floor(index / (totalColumns / colSpan) + gridItemRowOffset)
//     );

//     return (
//       <StyledGridItem
//         colSpan={gridItemColSpan}
//         colStart={colStart}
//         rowStart={rowStart}
//       >
//         <Image
//           src={src}
//           alt={alt}
//           width="100%"
//           height="140px"
//           objectFit="cover"
//           layout="responsive"
//         />
//       </StyledGridItem>
//     );
//   });

//   return (
//     <React.Fragment>
//       <StyledGrid columns={12} colGap={100}>
//         {images}
//       </StyledGrid>
//     </React.Fragment>
//   );
// };

// export default FeaturedImages;
