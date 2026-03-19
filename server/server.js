require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sendContactEmail } = require("./mailer");

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await sendContactEmail({ name, email, message });
    console.log(`✅ Contact email sent from ${email}`);
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Mailer Error:", err);
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
