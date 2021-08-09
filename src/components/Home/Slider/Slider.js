import React from "react";
import { Carousel } from "react-bootstrap";
import "./Sliderstyle.css";
import banner1 from "../../../assets/img/banner/latmat.png";
import banner2 from "../../../assets/img/banner/trangti.jpeg";
import banner3 from "../../../assets/img/banner/bantaydietquy.png";
import playbnt from "../../../assets/img/play-video.png";

export default function Slider() {
  return (
    <Carousel nextLabel="" prevLabel="">
      {/* <ol className="carousel-indicators">
        <li
          data-target="#sampleSlide"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#sampleSlide" data-slide-to="1"></li>
        <li data-target="#sampleSlide" data-slide-to="1"></li>
      </ol> */}
      <Carousel.Item interval={5000} keyboard={false} pauseOnHover={true}>
        <img
          className="d-block w-100"
          height={500}
          alt="900x500"
          src={banner1}
          alt="Lật Mặt"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000} keyboard={false} pauseOnHover={true}>
        <img
          className="d-block w-100"
          height={500}
          alt="900x500"
          src={banner2}
          alt="Trạng Tí"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000} keyboard={false} pauseOnHover={true}>
        <img
          className="d-block w-100"
          height={500}
          alt="900x500"
          src={banner3}
          alt="Trạng Tí"
        />
      </Carousel.Item>
      {/* <button className="playTrailer showHover ng-scope">
        <img src={playbnt} />
      </button> */}
    </Carousel>
  );
}
