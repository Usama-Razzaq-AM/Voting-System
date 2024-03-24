import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import VoterLogin from "./components/VoterLogin";
import SignUp from "./components/SignUp";
import AdminLogin from "./components/AdminLogin";
import VoterDashboard from "./components/pages/VoterDashboard";
import AdminDashboard from "./components/pages/AdminDashboard";
import BallotPage from "./components/pages/BallotPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/admin-login" exact Component={AdminLogin} />
          <Route path="/voter-signup" exact Component={SignUp} />
          <Route path="/voter-login" exact Component={VoterLogin} />
          <Route path="/voter-dashboard" exact Component={VoterDashboard} />
          <Route path="/admin-dashboard" exact Component={AdminDashboard} />
          <Route path="/ballot" exact Component={BallotPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
