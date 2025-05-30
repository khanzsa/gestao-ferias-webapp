import React from 'react';
import api from '../services/api';

export default function CalendarImport() {
  async function handleImport() {
    await api.post('/calendar/import');
    alert('Importação concluída');
  }

  return <button onClick={handleImport}>Importar Férias do Calendar</button>;
}
