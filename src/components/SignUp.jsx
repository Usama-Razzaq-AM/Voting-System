import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <>
      <div className="content">
        <main>
          <div className="intro">
            <form>
              <label for="voter-id">Voter Id:</label>
              <input
                type="email"
                id="voter-id"
                name="voter-id"
                placeholder="e.g. johndoe@gmail.com"
              />
              <label for="fullName">Full Name:</label>
              <input type="text" id="fullName" name="fullName" />
              <label for="birthDate">Date of Birth:</label>
              <input type="date" id="birthDate" name="birthDate" />
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" />
              <label for="constituency">Constituency:</label>
              <input
                type="text"
                id="constituency"
                name="constituency"
                required
              />
              <label for="uvc">Unique Voter Code:</label>
              <input type="text" id="uvc" name="uvc" required />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default SignUp;
