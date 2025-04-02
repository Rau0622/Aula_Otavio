const express = require('express')
const Path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','/index.html'));
  });

app.listen(port, () => {
     console.log(`Servidor rodando em http://localhost:${port}`);
 });

app.get('/login.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','login.html'));
  });
app.get('/register.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','register.html'));
  });
app.get('/forgot-password.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','forgot-password.html'));
  });
app.get('/blank.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','blank.html'));
  });
app.get('/404.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','404.html'));
  });
app.get('/buttons.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','buttons.html'));
  });
app.get('/cards.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','cards.html'));
  });
app.get('/charts.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','charts.html'));
  });
app.get('/tables.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','tables.html'));
  });
  app.get('/utilities-animation.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','utilities-animation.html'));
  });
app.get('/utilities-border.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','utilities-border.html'));
  });
app.get('/utilities-color.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','utilities-color.html'));
  });
app.get('/utilities-other.html', (req, res) => {
    res.sendFile(Path.join(__dirname,'Pages','utilities-other.html'));
  });