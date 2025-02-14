const express = require('express');
const path = require('path');
const { PORT } = require('./src/config/constants');
const rssRoutes = require('./src/routes/rss.routes');

const app = express();

// Configurações
app.use(express.static('public'));
app.use('/', rssRoutes);


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});