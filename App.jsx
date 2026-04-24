import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GradesTable from './components/GradesTable';
import AppealForm from './components/AppealForm';

function App() {
  const [page, setPage] = useState('accueil');

  return (
    <div style={{ display: 'flex', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <Sidebar setPage={setPage} />

      <main style={{ flex: 1, padding: '40px' }}>
        {page === 'accueil' && (
          <div>
            <h1>Tableau de bord Étudiant</h1>
            <p>Bienvenue dans votre portail académique. Utilisez le menu à gauche pour naviguer.</p>
          </div>
        )}

        {page === 'grades' && <GradesTable />}

        {page === 'appeal' && <AppealForm />}

        {page === 'timetable' && (
          <div>
            <h1>Emploi du temps des examens</h1>
            <p>📅 Les dates seront affichées ici prochainement.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
