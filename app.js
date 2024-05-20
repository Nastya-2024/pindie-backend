const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./routes/apiRouter');
const pagesRouter = require('./routes/pages');

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3001;

connectToDatabase();

// app.js
// Импорты и инициализация приложения

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter, // Добавляем
  express.static(path.join(__dirname, "public")),
);

// Запуск приложения

app.listen(PORT);
