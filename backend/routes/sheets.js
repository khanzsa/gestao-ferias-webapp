import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function distributeSubstitutions() {
  // Leia abas, aplique lógica de blocos de 5 dias e escreva de volta
}

export async function checkConflicts() {
  // Leia abas e aplique lógica de conflito, retorne quantidade de linhas marcadas
  return 0; // substitua pela contagem real
}
