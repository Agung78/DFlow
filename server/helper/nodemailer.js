const nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5e11b8bbe6c974",
    pass: "3009a0498177c8"
  }
});

function nodeMailer(receiver, token) {
  const message = {
    from: 'dflow@work.com', // Sender address
    to: receiver,         // List of recipients
    subject: 'Confirm your account to activate', // Subject line
    html: `
      <p>Click link below to activate!<p>
      <form method="post" action="http://localhost:3001/api/v1/activate/${token}" target="_blank">
        <input type="hidden" name="extra_submit_param">
        <button type="submit" name="submit_param" >
          Click to activate
        </button>
      </form>
      `
  };
  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });
}
{/* <form method="post" action="http://localhost:3000/reset-password" target="_blank">
        <input type="hidden" name="extra_submit_param">
        <button type="submit" name="submit_param" >
          Click to reset password
        </button>
      </form> */}

function forgotPass(receiver) {
  const message = {
    from: 'dflow@work.com', // Sender address
    to: receiver,         // List of recipients
    subject: 'You just clicked forgot password', // Subject line
    html: `
      <p>Click link below to create a new password to your account!<p>
      <a href="http://localhost:3000/reset-password">Click to reset password</a>
      `
  };
  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });
}

module.exports = {
  nodeMailer,
  forgotPass
}
