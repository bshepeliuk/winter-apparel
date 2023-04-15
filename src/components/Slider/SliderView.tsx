import { useState } from 'react';
import Slider from 'react-slick';

import SliderItemUrl1 from '../../assets/slider-item-1.jpg';
import SliderItemUrl2 from '../../assets/slider-item-2.jpg';
import SliderItemUrl3 from '../../assets/slider-item-3.jpg';
import SliderItemUrl4 from '../../assets/slider-item-4.jpg';
import SliderItemUrl5 from '../../assets/slider-item-5.jpg';
import { Image, Wrapper } from './slider.styled';
import NextArrow from './atoms/NextArrow';
import PrevArrow from './atoms/PrevArrow';

const defaultImages = [
  SliderItemUrl1,
  SliderItemUrl2,
  SliderItemUrl3,
  SliderItemUrl4,
  SliderItemUrl5,
];

const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  slidesPerRow: 1,
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
      breakpoint: 530,
      settings: {
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
      {images.map((url, idx) => (
        <Wrapper key={idx} style={{ width: 242 }}>
          <Image src={url} />
        </Wrapper>
      ))}
    </Slider>
  );
}

export default SliderView;
