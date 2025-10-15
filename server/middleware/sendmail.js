require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for 587
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }

});

module.exports = transporter