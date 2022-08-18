const express = require('express');
const mongoose = require('mongoose'); // mongoose for mondoDB
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true })
.then (() => {
  app.listen({port: PORT});
  console.log(`Server running at ${PORT}`);
})
.catch(err => {
  console.error(err);
});