const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  const { name, email, subject, message, school } = JSON.parse(event.body);

  const messageToSend = {
    to: 'shams@securiwiser.com', // Replace with your own email address
    from: 'shams@securiwiser.com',
    subject,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>School:</strong> ${school}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    sgMail.setApiKey(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); // Set your own SendGrid API key
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
