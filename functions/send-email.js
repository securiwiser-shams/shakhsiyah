const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  const { name, email, subject, message, school } = JSON.parse(event.body);

  const messageToSend = {
    to: 'shams@securiwiser.com', // Replace with your own email address
    from: process.env.SENDGRID_AUTHORIZED_EMAIL,
    subject,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>School:</strong> ${school}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Set your own SendGrid API key
    await sgMail.send(messageToSend);
    return {
      statusCode: 200,
      body: 'Email sent successfully!',
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.code,
      body: `Failed to send email: ${error.message}`,
    };
  }
};
