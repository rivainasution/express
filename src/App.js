import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import Latest from "../src/components/home/Latest";
import Location from "../src/components/home/Location";
import Popular from "../src/components/home/Popular";
import Promo from "../src/components/home/Promo";
import Purchase from "../src/components/home/Purchase";
import { Container } from "react-bootstrap";
class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      // Image Slides
      slides: [
        {
          img: "https://dummyimage.com/600x400/000/7CFC00"
        },
        {
          img: "https://dummyimage.com/600x400/000/ccccc"
        },
        {
          img: "https://dummyimage.com/600x400/000/dddddd"
        },
        {
          img: "https://dummyimage.com/600x400/000/fff"
        },
        {
          img: "https://dummyimage.com/600x400/000/B22222"
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00"
        },
        {
          img: "https://dummyimage.com/600x400/000/ccccc"
        },
        {
          img: "https://dummyimage.com/600x400/000/dddddd"
        },
        {
          img: "https://dummyimage.com/600x400/000/B22222"
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00"
        }
      ]
    };
  }
  // Slides Setting
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
    return (
        <div>
            {/* Corousel Latest */}
            <Container className="bg-light mb-5">
                <h2 className="pt-3"> Latest</h2>
                <Slider {...settings}>
                {this.state.slides.map((slide, index) => {
                    return (
                    <div key={index} className="my-3">
                        <Latest imgSrc={slide.img} />
                        {/* <img src={slide.img} alt={`slide${index}`} /> */}
                    </div>
                    );
                })}
                </Slider>
            </Container>
            
            {/* Corousel Location */}
            <Container className="bg-light mb-5">
                <h2 className="pt-3"> Location</h2>
                <Slider {...settings}>
                {this.state.slides.map((slide, index) => {
                    return (
                    <div key={index} className="my-3">
                        <Location imgSrc={slide.img} />
                        {/* <img src={slide.img} alt={`slide${index}`} /> */}
                    </div>
                    );
                })}
                </Slider>
            </Container>

            {/* Corousel Popular */}
            <Container className="bg-light mb-5">
                <h2 className="pt-3"> Popular</h2>
                <Slider {...settings}>
                {this.state.slides.map((slide, index) => {
                    return (
                    <div key={index} className="my-3">
                        <Popular imgSrc={slide.img} />
                        {/* <img src={slide.img} alt={`slide${index}`} /> */}
                    </div>
                    );
                })}
                </Slider>
            </Container>

            {/* Corousel Promo */}
            <Container className="bg-light mb-5">
                <h2 className="pt-3"> Promo</h2>
                <Slider {...settings}>
                {this.state.slides.map((slide, index) => {
                    return (
                    <div key={index} className="my-3">
                        <Promo imgSrc={slide.img} />
                        {/* <img src={slide.img} alt={`slide${index}`} /> */}
                    </div>
                    );
                })}
                </Slider>
            </Container>

            {/* Corousel Transaction */}
            <Container className="bg-light mb-5">
                <h2 className="pt-3"> Last Transaction</h2>
                <Slider {...settings}>
                {this.state.slides.map((slide, index) => {
                    return (
                    <div key={index} className="my-3">
                        <Purchase imgSrc={slide.img} />
                        {/* <img src={slide.img} alt={`slide${index}`} /> */}
                    </div>
                    );
                })}
                </Slider>
            </Container>
        </div>
    );
  }
}

export default ProductSlider;
