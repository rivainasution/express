import React from "react";
import { Container, Image } from "react-bootstrap";
import Banner from "../components/home/Banner";
import banner3 from "../assets/ribbon3.png";
import ProductSlider from "../App";

function Home() {
  return (
    <Container>
      <div className="margin-top">
        <Banner />
      </div>
      <div className="container bg-light my-5 ">
        <Image
        className="d-block w-100 height-50 py-3"
         src={banner3} alt="advertisement" />
      </div>
      <div className="margin-bottom">
        <ProductSlider />
      </div>
    </Container>
  );
}

export default Home;
