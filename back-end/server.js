const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");
const route = require("./routes/routes");
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(express());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api", route);

require('dotenv').config();
// require('nodemailer').config();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS
    }
  });



  app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: 'mihajamahefaandy@gmail.com',
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nRename: ${rename}\nNum: ${num}\nEmail: ${email}\nMessage: ${message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email envoyer avec success');
      }
    });
  });

  
app.listen(port, () => {
    console.log(`le serveur utilise le port ${port}`);
});

