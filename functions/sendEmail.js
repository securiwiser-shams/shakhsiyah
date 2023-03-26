const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  const { name, phone, email, subject, message } = JSON.parse(event.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'shams@securiwiser.com',
    from: process.env.SENDGRID_AUTHORIZED_EMAIL,
    subject: subject,
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
