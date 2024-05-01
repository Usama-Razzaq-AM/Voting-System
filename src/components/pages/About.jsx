import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="conatiner-fluid">
        <h1 className="about">ABOUT</h1>
        <section className="introduction row text-center py-3 px-4 my-4">
          <div className="col-lg-6 mb-md-5 my-lg-auto">
            <h1 className="fs-2">What We Do</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
              pulvinar lacus. Nulla ac justo eu ipsum placerat fermentum.
              Curabitur sed arcu ex. Morbi luctus maximus sapien vel suscipit.
              Cras tincidunt eget nunc nec blandit. Mauris sit amet justo et
              justo imperdiet malesuada vel at lacus.
            </p>
          </div>
          <div className="col-lg-6 text-lg-end text-center my-auto">
            <img
              className="img-fluid w-75  rounded"
              src="./images/about-bg"
              alt="voting-ballot"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
