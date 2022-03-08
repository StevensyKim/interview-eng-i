import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageCarousel({imageData}) {
  return (
    <Carousel showThumbs={false} showIndicators={false}>
      {imageData.map(item => (
        <div key={item.id}>
          <img src={item.image_link} alt={item.id} />
        </div>
      ))}
    </Carousel>
  );
}

ImageCarousel.propTypes = {
  imageData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    latin_name: PropTypes.string.isRequired,
    image_link: PropTypes.string.isRequired
  }))
};

export default ImageCarousel;