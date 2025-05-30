import { google } from 'googleapis';

// Autenticação usando JSON da conta de serviço
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
  scopes: ['https://www.googleapis.com/auth/calendar.readonly', 'https://www.googleapis.com/auth/spreadsheets'],
});

const calendar = google.calendar({ version: 'v3', auth });

export async function fetchEvents(from = new Date(), to = new Date('2050-12-31')) {
  const resp = await calendar.events.list({
    calendarId: process.env.CALENDAR_ID,
    timeMin: from.toISOString(),
    timeMax: to.toISOString(),
  });
  return resp.data.items;
}

// Importe os eventos para a planilha (mesma lógica do GAS)
export async function importToSheet() {
  const events = await fetchEvents();
  // ... lógica de gravação, reutilize funções de `services/sheets.js` para escrever na aba
}
