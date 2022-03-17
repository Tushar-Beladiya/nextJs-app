const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendMailToCustomer = (userMail, data) => {
  const msg = {
    to: userMail, // Change to your recipient
    from: "tushar.tangible@gmail.com", // Change to your verified sender
    subject: "Expeditions Connect",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    templateId: "d-e6482c7d1a5a4fc8979533c12a94d311",
    dynamic_template_data: data,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};
