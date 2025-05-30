import React from 'react';
import api from '../services/api';

export default function ConflictChecker() {
  async function handleCheck() {
    const res = await api.post('/sheets/check-conflicts');
    alert(`${res.data.count} conflitos encontrados`);
  }

  return <button onClick={handleCheck}>Verificar Conflitos</button>;
}
