import React from 'react';
import 'slick-carousel/slick/slick.css';
import './Hero.css'
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import image from './../assets/3.jpg';
import women from './../assets/38.jpg';
import beg from './../assets/39.jpg';
import art1 from './../assets/40.jpg';
function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className='mt-8'>
      <h1 className="text-center leading-wide text-2xl mb-6 font-medium">Some of the Best Paintings</h1>
      <Slider {...settings}>
        <div>
          <img className="h-full w-full object-cover" src={image} />
        </div>
        <div>
          <img className="h-full w-full object-cover" src={women} />
        </div>
        <div>
          <img className="h-full w-full object-cover" src={beg} />
        </div>
        <div>
          <img className="h-full w-full object-cover" src={art1} />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
