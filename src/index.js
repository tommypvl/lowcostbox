const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('UA Lowcost Market запущено!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
