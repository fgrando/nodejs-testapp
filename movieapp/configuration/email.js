const sgMail = require('@sendgrid/mail')

module.exports = (email, username, token) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: process.env.TO,
        from: process.env.FROM,
        subject: 'welcome to the jungle',
        html:`
        <p>Hello ${username}</p>
        <p>This is a test</p>
        <p>Verify your account</p>
        <button><a href='http://localhost:${process.env.PORT}/auth/verify?token=${token}'> Click Here</a></button>
        `
      }

    sgMail.send(msg)
    .then((response) => {
        console.log('success!')
        console.log(response[0].statusCode)
        console.log(response[0].headers)
      })
      .catch((error) => {
        console.error(error)
      })
}