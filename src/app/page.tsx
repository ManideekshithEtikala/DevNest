import LiquidEther from "./LiquidEther";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          position: "absolute",
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
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontWeight: 900,
            fontSize: "2rem",
            color: "#fff",
            letterSpacing: "-2px",
          }}
        >
          DevNest
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <a
            href="/"
            style={{
              color:"white",
              fontWeight: 600,
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Home
          </a>
          <a
            href="/docs"
            style={{
              color:"white",
              fontWeight: 600,
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Docs
          </a>
          <a
            href="/get-started"
            style={{
              color:"white",
              fontWeight: 600,
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Get Started
          </a>
        </div>
      </nav>
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
          pointerEvents: "none",
          width: "90%",
          maxWidth: "700px",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "3.8rem",
            fontWeight: 900,
            marginBottom: "1.2rem",
            lineHeight: 1.08,
            letterSpacing: "-2px",
            textShadow:
              "0 6px 32px rgba(82,39,255,0.22), 0 2px 8px rgba(0,0,0,0.18)",
            pointerEvents: "auto",
          }}
        >
          <span style={{ color: "#FF9FFC", fontWeight: 900 }}>DevNest</span>{" "}
          <br />
          <span style={{ color: "#fff", fontWeight: 700 }}>
            Build. Innovate. Succeed.
          </span>
        </h1>
        <p
          style={{
            fontSize: "1.35rem",
            fontWeight: 500,
            color: "#EDEDED",
            marginBottom: "2.2rem",
            lineHeight: 1.5,
            textShadow: "0 2px 12px rgba(82,39,255,0.12)",
            pointerEvents: "auto",
          }}
        >
          Empower your ideas with a modern developer platform.
          <br />
          Stop searching, start building, and discover your potential with{" "}
          <span style={{ color: "#FF9FFC", fontWeight: 700 }}>DevNest</span>.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            pointerEvents: "auto",
          }}
        >
          <a
            href="/get-started"
            style={{
              padding: "1rem 2.8rem",
              fontSize: "1.25rem",
              fontWeight: 700,
              borderRadius: "2rem",
              background: "linear-gradient(90deg, #5227FF 0%, #FF9FFC 100%)",
              color: "#fff",
              border: "none",
              boxShadow: "0 2px 12px rgba(82,39,255,0.18)",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
              cursor: "pointer",
            }}
          >
            Get Started
          </a>
          <a
            href="/docs"
            style={{
              padding: "1rem 2.8rem",
              fontSize: "1.25rem",
              fontWeight: 700,
              borderRadius: "2rem",
              background: "#fff",
              color: "#5227FF",
              border: "2px solid #5227FF",
              boxShadow: "0 2px 12px rgba(82,39,255,0.10)",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s, transform 0.2s",
              cursor: "pointer",
            }}
          >
            Go to Docs
          </a>
        </div>
      </div>
    </div>
  );
}
