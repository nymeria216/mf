import React from "react";

const Contact = () => {

  return ( 
      <footer >
        <div>Kontaktdaten: Deine Kontaktinformationen hier</div>
        <div>
          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" />
          <button>Absenden</button>
        </div>
      </footer>
  );
};

export default Contact;
