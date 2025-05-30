import React from 'react';
import CalendarImport from './components/CalendarImport';
import SubstitutionDistribution from './components/SubstitutionDistribution';
import ConflictChecker from './components/ConflictChecker';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Gestão de Férias e Substituições</h1>
      <CalendarImport />
      <SubstitutionDistribution />
      <ConflictChecker />
    </div>
  );
}
