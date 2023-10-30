import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Spinner from "./components/Spinner/Spinner";
import JoinUs from "./components/why_join_us/Join_us";
import Signup from "./components/SignupPage/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./components/Events/Events";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";

function App() {
  const [isLoading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      {isLoading ? (
        <Spinner />
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage className="z-[-5]" />} />
            <Route path="/events" element={<Event />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/events" element={<Event />} />
            <Route path="/upcomingEvents" element={<UpcomingEvents />} />
          </Routes>
        </Router>
      )}

    </div>
  );
}

export default App;
