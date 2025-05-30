import express from 'express';
import cors from 'cors';
import calendarRoutes from './routes/calendar.js';
import sheetsRoutes from './routes/sheets.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/calendar', calendarRoutes);
app.use('/api/sheets', sheetsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
