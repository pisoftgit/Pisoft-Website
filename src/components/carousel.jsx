import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const carouselItems = [
    { src: "/Industries.PNG", alt: "Industries", caption: "Industries We Serve" },
    { src: "/esmeHome.PNG", alt: "ESME Home", caption: "Welcome to ESME" },
    { src: "/whoweare.PNG", alt: "Who We Are", caption: "Who We Are" },
    { src: "/Industries.PNG", alt: "Industries", caption: "Industries We Serve" },
    { src: "/ESME.PNG", alt: "About ESME", caption: "Explore ESME" },
    { src: "/ESME.PNG", alt: "About ESME", caption: "Explore ESME" },
  ];

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "50px auto" }}>
      <style>
        {`
          .carousel-slide {
            position: relative;
          }

          .carousel-image {
            width: 100%;
            height: 350px;
            border-radius: 15px;
            transition: transform 0.5s ease, filter 0.3s ease, width 0.5s ease, height 0.5s ease;
            object-fit: cover;
          }

          .slick-slide {
            transform: scale(0.8);
            z-index: 1;
          }

          .slick-center {
            transform: scale(2.5);
            z-index: 3;
          }

          .slick-center .carousel-image {
            transform: scale(1.1);
            z-index: 3;
          }

          .slick-active {
            transform: scale(0.9);
            z-index: 2;
          }

          .slick-active .carousel-image {
            height: 400px;
          }

          .slick-slide.slick-active:first-child .carousel-image,
          .slick-slide.slick-active:last-child .carousel-image {
            width: 200px;
            height: 200px;
            filter: blur(2px);
            opacity: 0.5;
            z-index: 1;
          }
        `}
      </style>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div className="carousel-slide" key={index}>
            <img src={item.src} alt={item.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;
