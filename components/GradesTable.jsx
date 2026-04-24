import React from 'react';

const GradesTable = () => {
  const grades = [
    { id: 1, module: "Génie Logiciel", note: 14, credit: 6 },
    { id: 2, module: "Systèmes d'Information", note: 16, credit: 4 },
    { id: 3, module: "Base de Données", note: 12, credit: 5 },
  ];

  return (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#2c3e50' }}>Mes Résultats</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
            <th style={cellStyle}>Module</th>
            <th style={cellStyle}>Note / 20</th>
            <th style={cellStyle}>Crédits</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((g) => (
            <tr key={g.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={cellStyle}>{g.module}</td>
              <td style={{ ...cellStyle, fontWeight: 'bold', color: g.note >= 10 ? 'green' : 'red' }}>
                {g.note}
              </td>
              <td style={cellStyle}>{g.credit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const cellStyle = { padding: '12px', textAlign: 'left' };

export default GradesTable;
