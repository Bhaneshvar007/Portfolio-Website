const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/PortFolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for the contact form data
const contactSchema = new mongoose.Schema({
  email: String,
  name: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Define routes
app.post('/submit', async (req, res) => {
  try {
    const { email, name, message } = req.body;
    const contact = new Contact({ email, name, message });
    await contact.save();
    res.status(200).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form', error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
