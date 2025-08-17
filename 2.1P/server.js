const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));  // Serve index.html + css

// SendGrid setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  const msg = {
    to: email,
    from: "lavender24lily@gmail.com", // must be verified in SendGrid
    subject: "Welcome to DEV@Deakin!",
    text: "Hi, Thank you for joining DEV@Deakin!",
    html: "<h2>Welcome to DEV@Deakin</h2><p>We’re excited to have you with us.</p>",
  };

  try {
    await sgMail.send(msg);
    res.send("<h2>🎉 Subscription Successful!</h2><p>Check your inbox for a welcome email.</p><a href='/'>⬅ Back</a>");
  } catch (error) {
    console.error(error);
    res.send("<h2>⚠️ Subscription Failed</h2><p>Something went wrong. Please try again later.</p><a href='/'>⬅ Back</a>");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
