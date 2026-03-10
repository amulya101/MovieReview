import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { pool } from './db.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('PoemPort API is running!');
});

// GET all poems (summary — no content field)
app.get('/poems', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, title, description, image, author FROM poems ORDER BY id'
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET single poem (full content)
app.get('/poems/:id', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM poems WHERE id = $1',
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ message: 'Poem not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// GET comments for a poem
app.get('/poems/:id/comments', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM comments WHERE poem_id = $1 ORDER BY id',
      [req.params.id]
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// POST a new comment on a poem
app.post('/poems/:id/comments', async (req, res, next) => {
  try {
    const { author, text } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO comments (poem_id, author, text) VALUES ($1, $2, $3) RETURNING *',
      [req.params.id, author, text]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// Central error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
