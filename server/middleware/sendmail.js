require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
 host: "in-v3.mailjet.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILJET_API_KEY,
    pass: process.env.MAILJET_SECRET_KEY,
  },

});

module.exports = transporter