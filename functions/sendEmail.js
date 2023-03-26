const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  try {
    const { name, phone, email, subject, message } = JSON.parse(event.body);

    const msg = {
      to: 'xxx',
      from: 'xxx',
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
