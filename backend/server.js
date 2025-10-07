const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Appointment = require('./appointmentModel');

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["https://smilehub.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Connect MongoDB (Compass)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB (Compass) connected successfully'))
  .catch(err => console.error('❌ Connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('SmileHub Backend Running!');
});

// Add Appointment
app.post('/appointments', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving appointment' });
  }
});

// Get all Appointments
app.get('/appointments', async (req, res) => {
  try {
    const allAppointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(allAppointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
