const express = require('express');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// CORS Setup
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kaif@7523@',
  database: 'contactdb'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database (ID:', db.threadId + ')');
});

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kaifshaikh7523@gmail.com',
    pass: 'uhbkgsbypkdblvfx' // App Password
  }
});

// Test Route
app.get('/test', (req, res) => {
  res.send('Server is working!');
});

// Certificate Validation API
app.get('/validate/:certNumber', (req, res) => {
  const certNumber = req.params.certNumber;

  db.query(
    'SELECT certificate_number FROM certificates WHERE certificate_number = ?',
    [certNumber],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ valid: false });

      res.json({ valid: true });
    }
  );
});

// Contact Form Submission
app.post('/message', (req, res) => {
  const { name, mobile, email, message } = req.body;

  if (!name || !mobile || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = `INSERT INTO messages (name, mobile, email, message) VALUES (?, ?, ?, ?)`;

  db.query(sql, [name, mobile, email, message], (err, result) => {
    if (err) {
      console.error('Error saving message:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    console.log('Message saved (ID:', result.insertId + ')');

    // ✅ Respond immediately to frontend
    res.status(200).json({ message: 'Message saved. Confirmation email will follow shortly.' });

    // Prepare admin email
    const adminMailOptions = {
      from: '"SNZ CYBER INTELLECTS LLP. Support" <kaifshaikh7523@gmail.com>',
      to: 'kaifshaikh7523@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <img src="cid:logo" alt="SNZ CYBER INTELLECTS LLP Logo" style="width: 150px; margin-bottom: 20px;" />
          <h2 style="color: #155A8A;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f9f9f9; padding: 10px; border-left: 4px solid #155A8A;">${message}</p>
          <hr style="margin-top: 30px; margin-bottom: 10px;" />
          <p style="font-size: 12px; color: #888;">This message was sent from SNZ CYBER INTELLECTS LLP contact form.</p>
          <p style="font-weight: bold; color: #155A8A;">Regards,<br/>SNZ CYBER INTELLECTS LLP Team</p>
        </div>
      `,
      attachments: [
        {
          filename: 'logo.png',
          path: path.join(__dirname, 'logo.png'),
          cid: 'logo'
        }
      ]
    };

    // Prepare welcome email to user
    const userMailOptions = {
      from: '"SNZ CYBER INTELLECTS LLP Support" <kaifshaikh7523@gmail.com>',
      to: email,
      subject: 'Thank you for contacting SNZ CYBER INTELLECTS LLP!',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #155A8A;">Hello ${name},</h2>
          <p>Thank you for reaching out to <strong>SNZ CYBER INTELLECTS LLP</strong>. We have received your message and our team will contact you shortly.</p>
          <p>If you need immediate assistance, feel free to reply to this email.</p>
          <br />
          <p>Best regards,<br/>SNZ CYBER INTELLECTS LLP Team</p>
        </div>
      `
    };

    // Send both emails asynchronously
    transporter.sendMail(adminMailOptions, (adminErr, adminInfo) => {
      if (adminErr) return console.error('Admin email error:', adminErr);
      console.log('Admin email sent:', adminInfo.response);

      transporter.sendMail(userMailOptions, (userErr, userInfo) => {
        if (userErr) return console.error('User email error:', userErr);
        console.log('User welcome email sent:', userInfo.response);
      });
    });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
