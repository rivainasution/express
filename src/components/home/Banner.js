import React from "react";
import banner1 from "../../assets/banner7.jpg"
import banner2 from "../../assets/banner8.jpg"
import banner3 from "../../assets/banner6.jpg"
import {Breadcrumb, Image} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Banner() {
  return (
    
    <div class="container border-transparent bg-light mt-5">
      {/* BreadCrumb */}
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="py-3">Home</h3>
        <Breadcrumb>
          <Breadcrumb.Item active>Home/</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* End BreadCrumb */}

      {/* Quick Link and Banner */}
      <div class="row flex-lg-row flex-md--row flex-sm-column-reverse flex-column-reverse align-items-start my-3">

        {/* Qucik Link */}
        <div class="col-lg-4 text-center">
            <h2 class="font-weight-light">Quick Link</h2>

            {/* Star Icon Quick Link */}
            <div className="row ml-2">
              {/* Icon Category */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3  col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-list"></i><br/>Category</a>
                </Button>
                {/* Icon Latest */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3 col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-clock"></i><br/>Latest</a>
                </Button>
                {/* Icon Location */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3 col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-map-marker"></i><br/>Location</a>
                </Button>
                {/* Icon Popular */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3 col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-medal"></i><br/>Popular</a>
                </Button>
                {/* Icon Discount */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3 col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-percent"></i><br/>Discount</a>
                </Button>
                {/* Icon Shipping */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3 col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-shipping-fast"></i><br/>Shipping</a>
                </Button>
                {/* Icon Send in */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3 col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-calendar"></i><br/>Send in</a>
                </Button>
                {/* Icon Filter */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3 col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-filter"></i><br/>Filter</a>
                </Button>
                {/* Icon Coal */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3 col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-truck"></i><br/>Cargo</a>
                </Button>
                {/* Icon Copra */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3 col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-ship"></i><br/>Shipment</a>
                </Button>
                {/* Icon Oil */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3 col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-clipboard"></i><br/>My Order</a>
                </Button>
                {/* Icon Fiber */}
                <Button 
                  variant="light"
                  className="col-lg-3 col-md-3 col-sm-3 col-3 icon-text">
                  <a href="/shop"><i class="fa fa-2x fa-landmark"></i><br/>&#931;-xpress</a>
                </Button>
            </div>
            {/* End icon Quick Link */}

        </div>
        {/* End Quick Link */}


        {/* Carousel */}
        <div class="col-lg-8">
          <Carousel>
            <Carousel.Item>
              <Image
                className="d-block w-100 height-50"
                src={banner1}
                alt="First banner"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100 height-50"
                src={banner2}
                alt="Second banner"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100 height-50"
                src={banner3}
                alt="Third banner"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* End Carousel */}

      </div>
      {/* Quick Link and Banner */}

    </div>
  );
}

export default Banner;
