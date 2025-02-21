const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Используйте json-server для обработки API-запросов
app.use(middlewares);
app.use('/api', router);

// Укажите статические файлы (если у вас есть папка src с билдом)
app.use(express.static(path.join(__dirname, 'build')));

// Обработка всех маршрутов
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});