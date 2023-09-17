import React, { useState }from "react";

// Stile für die Webseite (du kannst sie anpassen)
const styles = {
  container: {
    maxWidth: "800px",
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

const Contact = () => {
  

  return (
    <div style={styles.container}>     
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

export default Contact;
