import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container pt-5 pb-3">
          <div className="row">
            <div className="col-xs-12 col-lg-4 col-md-4">
              <h2 className="text-start">GEVS</h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel pulvinar lacus. Nulla ac justo eu ipsum placerat fermentum.
                Curabitur sed arcu ex.
              </p>
            </div>
            <div className="col-xs-12 col-lg-4 col-md-4">
              <h2 className="text-start">Quick Links</h2>
              <ul className="text-start">
                <li>Home</li>
                <li>About Us</li>
                <li>Register</li>
                <li>Login</li>
              </ul>
            </div>
            <div className="col-xs-12 col-lg-4 col-md-4">
              <h2 className="text-start">Developers</h2>
              <ul className="text-start">
                <li>Muhammad Rehman</li>
                <li>Usama Razzaq</li>
                <li>Muhammad Subhan</li>
                <li>Furqan Majeed</li>
                <li>Zohaib-ul-Hassan</li>
                <li>Samama Babar</li>
              </ul>
            </div>
          </div>
          <div className="row footnote py-2">
            <p>An Online Voting System created for semester project.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
