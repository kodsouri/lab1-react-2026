import React, { useState } from 'react';

const AppealForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) return <div style={{color: 'green', fontWeight: 'bold'}}>✅ Votre demande a été envoyée avec succès !</div>;

  return (
    <div style={styles.card}>
      <h3>Demander une Double Correction</h3>
      <form onSubmit={handleSubmit}>
        <label>Choisir le module :</label>
        <select style={styles.input}>
          <option>Génie Logiciel</option>
          <option>Réseaux</option>
        </select>
        <label>Motif du recours :</label>
        <textarea style={{ ...styles.input, height: '100px' }} placeholder="Expliquez pourquoi vous demandez une révision..."></textarea>
        <button type="submit" style={styles.btn}>Soumettre la demande</button>
      </form>
    </div>
  );
};

const styles = {
  card: { background: 'white', padding: '20px', borderRadius: '10px', maxWidth: '500px' },
  input: { width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' },
  btn: { backgroundColor: '#e67e22', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }
};

export default AppealForm;
