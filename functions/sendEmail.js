const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(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);

exports.handler = async (event) => {
  try {
    const { name, phone, email, subject, message } = JSON.parse(event.body);

    const msg = {
      to: 'shams@securiwiser.com',
      from: 'shams@securiwiser.com',
      subject: subject,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error occurred while sending email' }),
    };
  }
};
