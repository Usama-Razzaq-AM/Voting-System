import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "../Card";

function Home() {
  return (
    <div className="container">
      <div className="content">
        <main>
          <div className="head-wrap">
            <div className="head">
              <h2>Register to Vote</h2>
              <p>
                Register here to vote online for the prosperity of Gilgit. The
                process tales only a minute.
              </p>
              <Link to="/voter-signup" className="button">
                Register
              </Link>
            </div>
          </div>
          <Card
            className="card"
            title="Election Commission Officer"
            description="If you have already registered as a voter, then login to voter dashboard and see if there is voting going on."
            button_text="Login"
            path="/admin-login"
          />
          <Card
            className="card"
            title="Registered Voter"
            description="If you have already registered as a voter, then login to voter dashboard and see if there is voting going on."
            button_text="Login"
            path="/voter-login"
          />
          <Card
            className="card"
            title="Perspective Voter"
            description="If you have already registered as a voter, then login to voter dashboard and see if there is voting going on."
            button_text="Register"
            path="/voter-signup"
          />
        </main>
      </div>
    </div>
  );
}

export default Home;
