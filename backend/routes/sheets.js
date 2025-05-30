import express from 'express';
import { distributeSubstitutions, checkConflicts } from '../services/sheets.js';

const router = express.Router();

router.post('/distribute', async (req, res) => {
  try {
    await distributeSubstitutions();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/check-conflicts', async (req, res) => {
  try {
    const count = await checkConflicts();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
