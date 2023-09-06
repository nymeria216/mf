import React, { useState } from 'react';

// Stile für die Webseite (du kannst sie anpassen)
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  passwordInput: {
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
  },
};

const App = () => {
  // Zustände für das Passwort und den gesicherten Bereich
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  // Funktion zur Überprüfung des Passworts
  const checkPassword = () => {
    if (password === 'deinPasswort') {
      setAuthenticated(true);
    } else {
      alert('Falsches Passwort');
    }
  };

  return (
    <div style={styles.container}>
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
      <footer style={styles.footer}>
        <div>Kontaktdaten: Deine Kontaktinformationen hier</div>
        <div>
          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" />
          <button style={styles.button}>Absenden</button>
        </div>
      </footer>
    </div>
  );
};

export default App;