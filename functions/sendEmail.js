const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  try {
    const { name, phone, email, subject, message } = JSON.parse(event.body);

    const msg = {
      to: 'shams@securiwiser.com',
      from: process.env.SENDGRID_AUTHORIZED_EMAIL,
      subject: 'Hello World',
      html: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>School:</strong> ${formData.school}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
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
