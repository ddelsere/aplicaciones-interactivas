const express = require('express');
const app = require('./app');
const dbConfig = require('./src/config/database');

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // Connect to the database
  // dbConfig.connect();
});