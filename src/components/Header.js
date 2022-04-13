import React from "react";

function Header({ search, setQuery, query }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1 style={{ marginTop: "25px", fontSize: "2em", fontWeight: "bold" }}>
        <a style={{ textDecoration: "none", color: "white" }} href="/">
          Weather App
        </a>
      </h1>
      <input
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontFamily: "Cursive",
          backgroundColor: "rgba(255, 255, 255, 0.755)",
          border: "2px solid transparent",
          width: "80%",
          height: "60px",
          padding: "15px",
          borderRadius: "20px",
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={search}
        type="text"
        placeholder="Search by City Name"
      />
    </div>
  );
}

export default Header;
