import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel() {
  return (
    <Carousel showThumbs={false} showIndicators={false}>
    </Carousel>
  );
}