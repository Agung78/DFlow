const nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c365ef06f72a20",
    pass: "48592be76296e2"
  }
});

function nodeMailer(receiver, token) {
  const message = {
    from: 'dflow@work.com', // Sender address
    to: receiver,         // List of recipients
    subject: 'Confirm your account to activate', // Subject line
    html: `
      <p>Click link below to activate!<p>
      <form method="post" action="http://localhost:3000/api/v1/activate/${token}" target="_blank">
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

function forgotPassword(receiver) {
  const message = {
    from: 'dflow@work.com', // Sender address
    to: receiver,         // List of recipients
    subject: 'You just clicked forgot password', // Subject line
    html: `
      <p>Click link below to create new password!<p>
      <form method="post" action="halaman front-end reset password" target="_blank">
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

module.exports = {
  nodeMailer,
  forgotPassword
}
