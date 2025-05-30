import { google } from 'googleapis';

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export async function fetchEvents(fromDate, toDate) {
  const res = await calendar.events.list({
    calendarId: process.env.CALENDAR_ID,
    timeMin: fromDate.toISOString(),
    timeMax: toDate.toISOString(),
  });
  return res.data.items;
}
