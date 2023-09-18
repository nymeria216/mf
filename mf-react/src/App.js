import React, { useState } from "react";

import './App.css';

import About from "./components/About";
import BigFive from "./components/BigFive";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const styles = {
  container: {
    maxWidth: "300px",
    margin: "0 auto",
    padding: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  passwordInput: {
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 0",
    textAlign: "center",
  },
};

export default function App() {
  // Zustände für das Passwort und den gesicherten Bereich
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  
  // Funktion zur Überprüfung des Passworts
  const checkPassword = () => {
    if (password === "deinPasswort") {
      setAuthenticated(true);
    } else {
      alert("Falsches Passwort");
    }
  };

  return (
    <main>
      <div>
        <div className="loading-container">
          <img src={require('./img/loading.gif')} alt="loading..." />
        </div>
      </div>
      {/* <div style={styles.container}></div>
        <header>
          <h1>Willkommen auf meiner Webseite</h1>
        </header>
        <section style={styles.section}>
          <h2>Über mich</h2>
          <p>Hier kannst du Informationen über mich finden.</p>
        </section>
        <section style={styles.section}>
          <h2>Projekte</h2>
          <p>Hier findest du Informationen über meine Projekte.</p>
        </section>
        {authenticated ? (
          // Bereich nach erfolgreicher Authentifizierung
          <section style={styles.section}>
            <h2>Gesicherter Bereich</h2>
            <p>Dieser Bereich ist passwortgeschützt.</p>
          </section>
        ) : (
          // Bereich zur Passworteingabe
          <section style={styles.section}>
            <h2>Passwortgeschützter Bereich</h2>
            <p>Bitte gib das Passwort ein, um auf diesen Bereich zuzugreifen:</p>
            <input
              type="password"
              style={styles.passwordInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button style={styles.button} onClick={checkPassword}>
              Einloggen
            </button>
          </section>
        )}
      <Navbar />
      <About />
      <Projects />
      <BigFive />
      <Contact /> */}
    </main>
  );
}