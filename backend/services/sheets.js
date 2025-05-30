import { google } from 'googleapis';

const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

export async function readRange(range) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEETS_ID,
    range,
  });
  return res.data.values;
}

export async function writeRange(range, values) {
  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SHEETS_ID,
    range,
    valueInputOption: 'USER_ENTERED',
    resource: { values },
  });
}
