const express = require('express');
const app = express();
const authRoutes = require('./src/routes/AuthenticationRoutes');
const serviceRoutes = require('./src/routes/ServiceRoute');
const commentRoutes = require('./src/routes/CommentRoute');
const bookingRoutes = require('./src/routes/BookingRoute');
const userRoutes = require('./src/routes/UserRoute');
const petRoutes = require('./src/routes/PetRoute')
const sequelize = require('./src/config/database');
const cors = require("cors");
app.use(cors("*")) // This Cross Origin Handling
app.use(express.urlencoded({ extended: true }));
// This is required to handle urlencoded data
app.use(express.json()); 
// This to handle json data coming from requests mainly post

// Use the routes
app.use('/api/v1', authRoutes);
app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/services/comments', commentRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/pets', petRoutes);

// Sincroniza los modelos con la base de datos
// sequelize.sync({ force: true, alter: true }) // Usa { alter: true } si no quieres borrar datos
//     .then(() => {
//         console.log('Database & tables created!');
//     })
//     .catch(err => {
//         console.log(err);
//     });

module.exports = app;