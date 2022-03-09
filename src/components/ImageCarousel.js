import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../less/header.less';

function ImageCarousel({imageData, showThumbs, showIndicators}) {
  return (
    <Carousel showThumbs={showThumbs} showIndicators={showIndicators} useKeyboardArrows={true}>
      {imageData.map(item => (
        <div key={item.id} className='carousel-inner '>
          <img src={item.image_link} alt={item.id} />
          <div className='caption' style={{backgroundColor:'rgba(0,0,0,0.4)', color:'#fff'}}>
            <h1>{item.name}</h1>
            <p>{item.latin_name}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

ImageCarousel.defaultProps = {
  imageData: [],
  showThumbs: false,
  showIndicators: true 
};

ImageCarousel.propTypes = {
  imageData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    latin_name: PropTypes.string.isRequired,
    image_link: PropTypes.string.isRequired
  }))
};

export default ImageCarousel;