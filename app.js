const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.user,
      pass: process.env.app_password
//     user: "deepthinairkk@gmail.com",
//  pass: "faax ffum ixre xqxv"
    },
  });


  const MailOptions= {
    from:  {
name:'node mailer',
address:process.env.user

    }, // sender address
    to: ["deepthikc4@gmail.com"], // list of receivers
    subject: "Node Mailer -Case Study", // Subject line
    text: "Hi,Welcome to Node Mailer", // plain text body
    html: "<b>Welcome to Node Mailer</b>", // html body
  }

  const sendMail=async(transporter,MailOptions)=>{

    try {
        await transporter.sendMail(MailOptions);
        console.log('mail has been sent');
    } catch (error) {
        console.log(error);
    }
  }

  sendMail(transporter,MailOptions);