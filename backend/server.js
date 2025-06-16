const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feedRoutes');  // Подключаем маршруты

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Используем маршрут
app.use('/api/feeds', feedRoutes);  // Передаем feedRoutes как middleware

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
