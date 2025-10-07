import React from "react";
import TiltedCard from "./Carrdlayout/TiltedCard";

export default function Homepage() {
  return (
    <div
      style={{
        background: "#000",
        position: "fixed",
        inset: 0,
        minHeight: "100vh",
        width: "100%",
        fontFamily: "'AR One Sans', Arial, Helvetica, sans-serif",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        zIndex: 0,
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2.5rem",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
        {/* Left side: Logo */}
        <div
          style={{
            fontWeight: 900,
            fontSize: "2rem",
            color: "#5227FF",
            letterSpacing: "-2px",
          }}
        >
          DevNest
        </div>
        {/* Right side: Search and Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {/* Search box */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "2rem",
              padding: "0.4rem 1rem",
              marginRight: "1.5rem",
            }}
          >
            {/* Search icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#5227FF"
              style={{ marginRight: "0.5rem" }}
            >
              <circle cx="11" cy="11" r="7" stroke="#5227FF" strokeWidth="2" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#5227FF" strokeWidth="2" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                fontSize: "1rem",
                fontFamily: "'AR One Sans', Arial, Helvetica, sans-serif",
                width: "120px",
              }}
            />
          </div>
          {/* Nav links */}
          <a
            href="/about"
            style={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            About Us
          </a>
          <a
            href="/contact"
            style={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Contact Us
          </a>
          <a
            href="/docs"
            style={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Docs
          </a>
        </div>
      </nav>
      {/* Add your homepage content below */}
    </div>
  );
}