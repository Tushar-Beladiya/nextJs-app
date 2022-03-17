const express = require("express");
const app = express();

const cors = require("cors");
const { sendMailToCustomer } = require("./helper/sendMail");
require("dotenv").config();

app.use(express.urlencoded());
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Server is running on ${PORT}`);
});

app.post("/send-email", (req, res) => {
  try {
    const body = req.body;
    const mailBody = {
      code: body.code,
      date: body.date,
      days: body.days,
      no_of_people: body.no_of_people,
      price_per_person: body.price_per_person,
      total: body.total,
      message: body.message,
    };
    sendMailToCustomer(body.email, mailBody);
    res.json({ status: "Success", message: body });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
