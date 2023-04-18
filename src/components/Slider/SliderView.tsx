import { useState } from 'react';
import Slider from 'react-slick';

import Slide1 from '../../assets/slide-1.jpg';
import Slide2 from '../../assets/slide-2.jpg';
import Slide3 from '../../assets/slide-3.jpg';
import Slide4 from '../../assets/slide-4.jpg';
import Slide5 from '../../assets/slide-5.jpg';
import { Image, Wrapper } from './slider.styled';
import NextArrow from './atoms/NextArrow';
import PrevArrow from './atoms/PrevArrow';

const defaultImages = [
  { id: 1, url: Slide1 },
  { id: 2, url: Slide2 },
  { id: 3, url: Slide3 },
  { id: 4, url: Slide4 },
  { id: 5, url: Slide5 },
];

const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  slidesPerRow: 1,
  initialSlide: 3,
  row: 1,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  adaptiveHeight: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        initialSlide: 0,
        arrows: false,
        centerMode: false,
      },
    },
  ],
};

function SliderView() {
  const [images, _] = useState(() => defaultImages);

  return (
    <Slider {...settings}>
      {images.map((img) => (
        <Wrapper key={img.id} style={{ width: 242 }}>
          <Image src={img.url} />
        </Wrapper>
      ))}
    </Slider>
  );
}

export default SliderView;
