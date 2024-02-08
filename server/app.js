const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());

const users = {};
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sampreet.g.77@gmail.com",
    pass: "mwba daiq fbda yowi",
  },
});
app.post("/sendOTP", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  const OTP = Math.floor(100000 + Math.random() * 900000).toString();
  users[email] = OTP;
  const mailOptions = {
    from: "Sam Test",
    to: email,
    subject: "OTP Verification",
    text: `Your OTP for verification is: ${OTP}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send OTP via email" });
    } else {
      res.status(200).json({ message: "OTP sent successfully via email", OTP });
    }
  });
});

app.post("/verifyOTP", (req, res) => {
  const { email, OTP } = req.body;
  if (!email || !OTP) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }
  const storedOTP = users[email];
  if (!storedOTP || OTP !== storedOTP) {
    return res.status(401).json({ message: "Invalid OTP" });
  }
  delete users[email];
  res.status(200).json({ message: "OTP verified successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
