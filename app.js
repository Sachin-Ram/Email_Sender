const express=require('express');

const bodyparser=require('body-parser');

const nodemailer=require('nodemailer');



const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "gmail",
      pass: "passcode",
    },
  });






const app=express();

app.use(express.json());

app.use(bodyparser.json());

app.use(express.static('public'));


app.post('/sendemail',(req,res)=>{
    console.log("email sent");
    res.status(200).send("success");


    let mailDetails = {
        from: 'nowsaymyname07@gmail.com',
        to: req.body['email'],//data from the form
        subject: 'Test mail',
        text: 'nodemailer is being tested'
    };

    transporter.sendMail(mailDetails,
        function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log('Email sent successfully');
            }
        });
});


const port=4500;

app.listen(port,()=>{
    console.log("listening");
});