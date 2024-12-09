import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm.tsx";
import SignUpForm from "./components/SignUpForm.tsx";
import './App.css'
import { Toaster } from 'react-hot-toast'
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Toaster />
        <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={<LoginForm />}
          />
        </Routes>
      </div>
    </Router>
  );
};
const Header: React.FC = () => (
  <header
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 30px",
      backgroundColor: "#121212", // Dark background
      color: "white",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
      flexWrap: "wrap", // Allow wrapping for smaller screens
    }}
  >
    <h1 style={{ margin: 0, fontSize: "24px" }}></h1>
    <nav
      style={{
        display: "flex",
        gap: "15px",
        marginTop: "10px",
        flexWrap: "wrap", // Ensure links wrap on smaller screens
      }}
    >
      <Link
        to="/signup"
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "18px", // Default font size
          padding: "8px 16px", // Button padding
          borderRadius: "4px",
          backgroundColor: "transparent",
          border: "2px solid white",
          transition: "all 0.3s ease", // Smooth hover effect
          flexShrink: 0, // Prevent shrinking
        }}
        onMouseOver={(e) => {
          (e.target as HTMLAnchorElement).style.backgroundColor = "white";
          (e.target as HTMLAnchorElement).style.color = "#121212";
        }}
        onMouseOut={(e) => {
          (e.target as HTMLAnchorElement).style.backgroundColor = "transparent";
          (e.target as HTMLAnchorElement).style.color = "white";
        }}
      >
        Sign Up
      </Link>
      <Link
        to="/login"
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "18px", // Default font size
          padding: "8px 16px", // Button padding
          borderRadius: "4px",
          backgroundColor: "transparent",
          border: "2px solid white",
          transition: "all 0.3s ease", // Smooth hover effect
          flexShrink: 0, // Prevent shrinking
        }}
        onMouseOver={(e) => {
          (e.target as HTMLAnchorElement).style.backgroundColor = "white";
          (e.target as HTMLAnchorElement).style.color = "#121212";
        }}
        onMouseOut={(e) => {
          (e.target as HTMLAnchorElement).style.backgroundColor = "transparent";
          (e.target as HTMLAnchorElement).style.color = "white";
        }}
      >
        Login
      </Link>
    </nav>
  </header>
);

// Media query to reduce font size on small screens
const styles = `
  @media (max-width: 768px) {
    header h1 {
      font-size: 20px; /* Reduced font size for header */
    }
    nav a {
      font-size: 16px; /* Reduced font size for buttons */
      padding: 6px 12px; /* Reduced padding */
    }
  }

  @media (max-width: 480px) {
    header h1 {
      font-size: 18px; /* Further reduced font size for header on smaller screens */
    }
    nav a {
      font-size: 14px; /* Further reduced font size for buttons */
      padding: 4px 10px; /* Further reduced padding */
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// export default Header;

// export default Header;


export default App;
