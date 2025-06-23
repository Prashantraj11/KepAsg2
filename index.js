require('dotenv').config();
const express  = require('express');
const sqlite3  = require('sqlite3').verbose();
const cors     = require('cors');

const PORT = process.env.PORT || 4000;
const db   = new sqlite3.Database('app.db');
const app  = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/items', (req, res) => {
  db.all('SELECT * FROM items ORDER BY id DESC', [], (err, rows) => {
    if (err) return res.status(500).json({error: err.message});
    res.json(rows);
  });
});

app.get('/api/items/:id', (req, res) => {
  db.get('SELECT * FROM items WHERE id = ?', [req.params.id], (err, row) => {
    if (err) return res.status(500).json({error: err.message});
    if (!row) return res.status(404).json({error: 'Not found'});
    res.json(row);
  });
});

app.post('/api/items', (req, res) => {
  const { name, description } = req.body;
  db.run('INSERT INTO items(name, description) VALUES (?,?)',
    [name, description],
    function (err) {
      if (err) return res.status(500).json({error: err.message});
      res.status(201).json({ id: this.lastID, name, description });
    });
});
app.put('/api/items/:id', (req, res) => {
  const { name, description } = req.body;
  db.run(
    'UPDATE items SET name = ?, description = ? WHERE id = ?',
    [name, description, req.params.id],
    function (err) {
      if (err) return res.status(500).json({error: err.message});
      if (!this.changes) return res.status(404).json({error: 'Not found'});
      res.json({ message: 'Updated' });
    });
});
app.delete('/api/items/:id', (req, res) => {
  db.run('DELETE FROM items WHERE id = ?', [req.params.id], function (err) {
    if (err) return res.status(500).json({error: err.message});
    if (!this.changes) return res.status(404).json({error: 'Not found'});
    res.json({ message: 'Deleted' });
  });
});

app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
