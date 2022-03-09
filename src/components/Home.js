import React from 'react';
import ImageCarousel from './ImageCarousel';

export default function Home({imageData}) {
  if (!imageData || imageData.length === 0) {
    return (
      <img src='spinner.gif' alt='loading...' style={{display: 'block',
        marginLeft: 'auto', marginRight: 'auto'}} />
    );
  }
  return (
    <ImageCarousel imageData={imageData} />
  );
}