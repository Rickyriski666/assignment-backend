const express = require('express');
const productsRouter = require('./routes/productsRoutes');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(productsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
