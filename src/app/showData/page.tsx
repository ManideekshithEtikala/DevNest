'use client'
import React from "react";
import { ChromaGrid } from "./ChromaGrid";
import toolsData from "../../../data/TotalData";

export default function showData() {
  return (
    <div
      style={{
        background: "#000", 
        minHeight: "100%", 
        width: "100%",
        fontFamily: "'AR One Sans', Arial, Helvetica, sans-serif",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* Fixed full-screen black background layer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          zIndex: -1,
        }}
      />

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
        <a
          href="/"
          style={{
            fontWeight: 900,
            fontSize: "2rem",
            color: "#5227FF",
            letterSpacing: "-2px",
            textDecoration: "none",
          }}
        >
          DevNest
        </a>

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
              <line
                x1="16.5"
                y1="16.5"
                x2="21"
                y2="21"
                stroke="#5227FF"
                strokeWidth="2"
              />
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

          {/* Links */}
          {["About Us", "Contact Us", "Docs"].map((text) => (
            <a
              key={text}
              href={`/${text.toLowerCase().replace(" ", "")}`}
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.1rem",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {text}
            </a>
          ))}
        </div>
      </nav>

      {/* Scrollable content */}
      <main
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "100px",
    paddingBottom: "3rem",
    width: "100%",
    minHeight: "100vh",
    overflowX: "hidden",
  }}
>
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    <ChromaGrid
      items={toolsData}
      radius={300}
      damping={0.45}
      fadeOut={0.6}
      ease="power3.out"
    />
  </div>
</main>

    </div>
  );
}
