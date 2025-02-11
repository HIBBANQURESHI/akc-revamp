const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());


// Configure CORS (Allow specific frontend origin)
app.use(cors({
  origin: ['http://localhost:3000', 'https://www.akclinktech.com/'], // Update with your frontend URL
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "akclinktechdigitizing@gmail.com", // Your email
    pass: "wfmv doza gxrj ihag" // App password
  },
});

// Contact Form Endpoint
app.post('/contact', async (req, res) => {
  const { name, email, phone, selectedInterests, company, category, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Receiving email
    subject: 'New Contact Us Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company || 'N/A'}
      Category: ${category || 'N/A'}
      Interests: ${selectedInterests?.length ? selectedInterests.join(', ') : 'N/A'}
      Message: ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message Sent Successfully!', info });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

// Define Port & Start Server
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
