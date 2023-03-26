const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  const { name, phone, email, subject, message } = JSON.parse(event.body);

  sgMail.setApiKey(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);

  const msg = {
    to: 'shams@securiwiser.com',
    from: 'shams@securiwiser.com',
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
