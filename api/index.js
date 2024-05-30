const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const commentRoutes = require('./routes/commentRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Use the routes
app.use('/api/v1', authRoutes);
app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/services/comments', commentRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;