import React from "react";
import "./voter-log.css";
import { Link } from "react-router-dom";

function VoterLogin() {
  return (
    <>
      <div class="content">
        <main>
          <div class="intro">
            <form>
              <label for="voter-id">Email Id:</label>
              <input type="email" id="voter-id" placeholder="Email" />
              <label for="password">Password:</label>
              <input type="password" id="password" placeholder="Password" />
              <input type="submit" />
              <div class="reg">
                <h3>
                  Create New Account <Link to="/voter-signup">Sign Up</Link>
                </h3>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default VoterLogin;
