import React from 'react';

const navItems = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'grades', label: 'Mes résultats' },
  { id: 'appeal', label: 'Double correction' },
  { id: 'timetable', label: 'Emploi du temps' },
];

const Sidebar = ({ setPage }) => (
  <aside
    style={{
      width: '240px',
      minHeight: '100vh',
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '24px 0',
      boxShadow: '2px 0 8px rgba(0,0,0,0.08)',
    }}
  >
    <h2 style={{ padding: '0 20px 20px', margin: 0, fontSize: '1.1rem', borderBottom: '1px solid #34495e' }}>
      Portail
    </h2>
    <nav style={{ marginTop: '16px' }}>
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setPage(item.id)}
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'left',
            padding: '14px 20px',
            border: 'none',
            background: 'transparent',
            color: 'inherit',
            fontSize: '0.95rem',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#34495e';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
