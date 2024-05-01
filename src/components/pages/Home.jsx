import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "../Card";

function Home() {
  return (
    <>
      <div className="container-fluid">
        {/*----------------Hero Section----------- */}
        <section className="row hero-section text-center py-3 px-4 my-4">
          <div className="col-lg-6 mb-md-5 my-lg-auto">
            <h1 className="fs-2">General Election Voting System</h1>
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
              src="./images/bg-image.jpg"
              alt="voting-ballot"
            />
          </div>
        </section>
        {/*----------------Registration/Login Section---------------- */}
        <section className="registration-login-section py-5 px-4">
          <div className="container">
            <h2 className="text-center mb-5">Registration / Login</h2>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <div className="card-body text-center py-4">
                    <h3 className="card-title">Admin Login</h3>
                    <p className="card-text text-center">
                      Login as an Election Commission Officer to manage the
                      system.
                    </p>
                    <Link to="/admin-login" className="btn button">
                      Admin Login
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <div className="card-body text-center py-4">
                    <h3 className="card-title">Voter Registration</h3>
                    <p className="card-text text-center">
                      Register as a voter to participate in elections.
                    </p>
                    <Link to="/voter-signup" className="btn button">
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <div className="card-body text-center py-4">
                    <h3 className="card-title">Voter Login</h3>
                    <p className="card-text text-center">
                      Login as a registered voter to cast your vote.
                    </p>
                    <Link to="/voter-login" className="btn button">
                      Voter Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*----------------Parties Section---------------- */}
        <section className="parties-details"></section>
        {/*----------------Election-Schedule Section---------------- */}
        <section className="election-schedule"></section>
        {/*----------------About Section---------------- */}
        <section className="about-section py-7">
          <div className="about-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-content">
                  <h2>About Our Voting System</h2>
                  <p>
                    Our online voting system provides a secure and convenient
                    way for citizens to participate in the democratic process.
                    With our user-friendly platform, voters can register, learn
                    about candidates, and cast their ballots from the comfort of
                    their own homes. We are committed to ensuring the integrity
                    and fairness of elections, with robust security measures in
                    place to protect against fraud and unauthorized access. Our
                    system is designed to provide transparency and
                    accountability at every stage of the voting process. Whether
                    you're a first-time voter or a seasoned participant, our
                    online voting system makes it easy to exercise your right to
                    vote and make your voice heard in the democratic process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*----------------How it works Section---------------- */}
        <section className="how-it-works-section py-5">
          <div className="container">
            <h2 className="text-center mb-5">How It Works</h2>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <div className="card-body text-center">
                    <h3 className="card-title">1. Register as a Voter</h3>
                    <p className="card-text text-center">
                      Register yourself as a voter by providing your details and
                      verifying your identity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <div className="card-body text-center">
                    <h3 className="card-title">2. Login as a Voter</h3>
                    <p className="card-text text-center">
                      Login to your voter account using your credentials to
                      access the voting interface.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <div className="card-body text-center">
                    <h3 className="card-title">3. Cast Your Vote</h3>
                    <p className="card-text text-centers">
                      Select your preferred candidate from the available options
                      and submit your vote.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*----------------Contact Information Section---------------- */}
      </div>
    </>
  );
}

export default Home;

// function Home() {
//   return (
//     <div className="container">
//       <div className="content">
//         <main>
//           <div className="head-wrap">
//             <div className="head">
//               <h2>Register to Vote</h2>
//               <p>
//                 Register here to vote online for the prosperity of Gilgit. The
//                 process tales only a minute.
//               </p>
//               <Link to="/voter-signup" className="button">
//                 Register
//               </Link>
//             </div>
//           </div>
//           <Card
//             className="card"
//             title="Election Commission Officer"
//             description="If you have already registered as a voter, then login to voter dashboard and see if there is voting going on."
//             button_text="Login"
//             path="/admin-login"
//           />
//           <Card
//             className="card"
//             title="Registered Voter"
//             description="If you have already registered as a voter, then login to voter dashboard and see if there is voting going on."
//             button_text="Login"
//             path="/voter-login"
//           />
//           <Card
//             className="card"
//             title="Perspective Voter"
//             description="If you have already registered as a voter, then login to voter dashboard and see if there is voting going on."
//             button_text="Register"
//             path="/voter-signup"
//           />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Home;
