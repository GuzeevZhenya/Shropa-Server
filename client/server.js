const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Используйте json-server для обработки API-запросов
app.use(middlewares);
app.use('/api', router);

// Укажите статические файлы
app.use(express.static(path.join(__dirname, 'client/build')));

// Обработка всех маршрутов
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});