import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Header.css"
const Header: React.FC = () => (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 30px",
        backgroundColor: "rgb(67 66 66)", // Dark background
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

  export default Header;