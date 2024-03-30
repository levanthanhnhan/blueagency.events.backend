require("dotenv").config();
var express = require("express");
var nodeMailer = require("nodemailer");
var router = express.Router();

const sendMailStatus = {
  Success: "0",
  Error: "1",
};

/* Send mail feedback */
router.post("/feedback", async (req, res, next) => {
  try {
    await sendMail(
      req.body.txtMailFrom,
      req.body.txtMailSubject,
      req.body.txtMailBody
    );
    console.log("Send mail success to email: " + req.body.txtMailFrom);
    res.send(sendMailStatus.Success);
  } catch (error) {
    console.log("Send mail failed with error: " + error);
    res.send(sendMailStatus.Error);
  }
});

const sendMail = (mailFrom, subject, htmlContent) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: "587",
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL_FROM,
      pass: process.env.NODEMAILER_PASSWORD_FROM,
    },
  });

  const options = {
    from: process.env.NODEMAILER_EMAIL_FROM,
    to: process.env.NODEMAILER_EMAIL_TO,
    subject: subject,
    html:
      "<span style='color: black'>You got a new message from </span><span style='font-style: italic; font-weight: bold;'>" +
      mailFrom +
      " </span> with message: <br/><blockquote style='border-left: 5px solid; margin-left: 20px; border-color: #f59e1d;'><p style='margin-left: 10px'>" +
      htmlContent +
      "</p></blockquote>",
  };
  return transporter.sendMail(options);
};

module.exports = router;
