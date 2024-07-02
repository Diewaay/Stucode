import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Subscription from "./Components/Pages/Subscription";
import Content from "./Components/Pages/Content";
import Course from "./Components/Pages/Course";
import { useState } from "react";
import Footer from "./Components/Footer";

const App = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const hideNavbar =
    location.pathname === "/Login" ||
    location.pathname === "/Register" ||
    location.pathname === "/Subscription";

  return (
    <>
      {!hideNavbar && (
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/Register" element={<Register />} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/Course/:title/:deskripsi" element={<Course />} />
        <Route path="/content/:title/:image" element={<Content />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
