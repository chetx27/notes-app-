import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

let notes = [];

app.use(cors());
app.use(express.json());

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const note = req.body;
  notes.push(note);
  res.json(note);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});