require("dotenv").config();
const mailjet = require("node-mailjet").apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

// Function to send an email
async function sendMail({ fromEmail, fromName, toEmail, toName, subject, text, html }) {
  try {
    const result = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: fromEmail,
            Name: fromName,
          },
          To: [
            {
              Email: toEmail,
              Name: toName,
            },
          ],
          Subject: subject,
          TextPart: text,
          HTMLPart: html,
        },
      ],
    });

    console.log("✅ Mail sent:", result.body);
    return { success: true, data: result.body };
  } catch (err) {
    console.error("❌ Mail error:", err.statusCode, err.message);
    return { success: false, error: err };
  }
}

module.exports = sendMail;