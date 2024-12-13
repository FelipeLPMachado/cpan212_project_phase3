import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/preferences">Profile</Link>}
        {!isLoggedIn && (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
