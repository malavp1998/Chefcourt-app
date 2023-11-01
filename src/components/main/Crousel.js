import React from "react";
import img1 from "../assets/crouselImages/img1.png";
import img2 from "../assets/crouselImages/img2.png";
import img3 from "../assets/crouselImages/img3.png";

export default function Crousel() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" style={{ height: "50vh" }}>
          <img class="d-block w-100" src={img1} alt="First slide" />
          <div class="carousel-caption d-none d-md-block">
            <h1 style={{ fontSize: "70px" }}>Your one stop for all Recipes </h1>
            <h2>CHECKOUT NOW</h2>
          </div>
        </div>
        <div class="carousel-item" style={{ height: "50vh" }}>
          <img class="d-block w-100" src={img2} alt="Second slide" />
          <div class="carousel-caption d-none d-md-block">
            <h1 style={{ fontSize: "70px" }}>Your one stop for all Recipes </h1>
            <h2>CHECKOUT NOW</h2>
          </div>
        </div>
        <div class="carousel-item" style={{ height: "50vh" }}>
          <img class="d-block w-100" src={img3} alt="Third slide" />
          <div class="carousel-caption d-none d-md-block">
            <h1 style={{ fontSize: "70px" }}>Your one stop for all Recipes </h1>
            <h2>CHECKOUT NOW</h2>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
