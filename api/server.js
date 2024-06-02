const express = require('express');
const app = require('./app');
const dbConfig = require('./config/database');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // Connect to the database
  dbConfig.connect();
});