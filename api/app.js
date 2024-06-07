const express = require('express');
const app = express();
const authRoutes = require('./src/routes/AuthenticationRoutes');
const serviceRoutes = require('./src/routes/ServiceRoute');
const commentRoutes = require('./src/routes/CommentRoute');
const bookingRoutes = require('./src/routes/BookingRoute');
const userRoutes = require('./src/routes/UserRoute');
const sequelize = require('./src/config/database');

app.use(express.json());

// Use the routes
app.use('/api/v1', authRoutes);
app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/services/comments', commentRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/users', userRoutes);

// Sincroniza los modelos con la base de datos
sequelize.sync({ force: true }) // Usa { alter: true } si no quieres borrar datos
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.log(err);
    });

module.exports = app;