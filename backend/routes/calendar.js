import express from 'express';
import { fetchEvents, importToSheet } from '../services/calendar.js';

const router = express.Router();

router.post('/import', async (req, res) => {
  try {
    await importToSheet();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
