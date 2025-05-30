import React from 'react';
import api from '../services/api';

export default function SubstitutionDistribution() {
  async function handleDistribute() {
    await api.post('/sheets/distribute');
    alert('Distribuição concluída');
  }

  return <button onClick={handleDistribute}>Distribuir Substituições</button>;
}
