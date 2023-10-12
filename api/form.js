const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  try {
    const body = JSON.parse(req.body);

    const message = {
      from: 'shams@securiwiser.com',
      to: 'shams@securiwiser.com',
      subject: body.title,
      html: `<div>
        <p><strong>Name: </strong> ${body.name}</p>
        <p><strong>Email: </strong>${body.email}</p>
        <p><strong>${body.school ? 'School name: ' : 'Subject: '}</strong>${body.school ? body.school : body.subject}</p>
        <p><strong>Message: </strong><br/>${body.message}</p>
      </div>`
    };

    return mail.send(message).then(
      () => {
        res.status(200).json({
          message: "Email sent successfully",
        })
      },
      error => {
        console.error(error)
        if (error.response) {
          return res.status(500).json({
            error: error.response,
          })
        }
      }
    );
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was an error", error: err })
  }
}
