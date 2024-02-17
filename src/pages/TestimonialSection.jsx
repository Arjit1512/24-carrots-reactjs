import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSection = () => {
  const testimonialImages = [
    'https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg',
    'https://24carrots.com/wp-content/uploads/2023/09/MAIN.jpg',
    'https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-4.jpg',
    'https://24carrots.com/wp-content/uploads/2023/08/7-31-5.png',
    'https://24carrots.com/wp-content/uploads/2023/08/9-7.jpg',
    'https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-3.jpg',
    'https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <Slider {...settings}>
      {testimonialImages.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Testimonial ${index + 1}`}
            style={{ width: '600px',height:'80vh'}}
          />
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSection;
