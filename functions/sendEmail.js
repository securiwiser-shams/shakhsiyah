const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  try {
    const { name, phone, email, subject, message } = JSON.parse(event.body);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};
