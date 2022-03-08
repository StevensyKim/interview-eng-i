import React from 'react';
import ImageCarousel from './ImageCarousel';

export default function Home({imageData}) {
  if (!imageData || imageData.length === 0) {
    return (
      // TODO: create loader image
      <p>No ImageData Yet</p>
    );
  }
  return (
    <ImageCarousel imageData={imageData} />
  );
}