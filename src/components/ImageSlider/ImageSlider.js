import React from 'react'

import "./ImageSlider.css"

const ImageSlider = ({images,changeActiveImage,activeImage}) => {
  return (
    <div>
      {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            style={{ width: '5rem', height: '5rem', marginRight: '10px', cursor: 'pointer' }}
            onClick={() => changeActiveImage(image)}
            className={image === activeImage ? 'active_image' : ''}
          />
        ))}
    </div>
  )
}

export default ImageSlider
