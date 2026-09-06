import React from "react";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #020617 0%, #061b3a 50%, #020617 100%)",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily:
          "Inter, Arial, Helvetica, sans-serif",
        textAlign: "center",
      }}
    >
      <main>
        <div
          style={{
            fontSize: "14px",
            letterSpacing: "5px",
            marginBottom: "20px",
            opacity: 0.7,
          }}
        >
          ASTRONIS
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 8vw, 82px)",
            lineHeight: 1,
            margin: 0,
            fontWeight: 700,
          }}
        >
          Corporate Intelligence.
          <br />
          Business Growth.
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "28px auto",
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#b8c7dc",
          }}
        >
          ASTRONIS — Corporate, Regulatory & Business Advisory.
          <br />
          Enabling Business Growth Through Legal Intelligence.
        </p>

        <button
          style={{
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.08)",
            color: "#ffffff",
            padding: "15px 28px",
            borderRadius: "999px",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          ASTRONIS
        </button>
      </main>
    </div>
  );
}
