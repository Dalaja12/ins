const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Configuración del servidor SMTP de Mailtrap
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "62d9db5227ac12",
      pass: "ccf80510594cca"
    }
  });
  
// Middleware para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar la solicitud del formulario
app.post('/submit-form', (req, res) => {
    const { name, school, average, email } = req.body;
    let message = '';

    // Condición para enviar correos basada en los requisitos
    if (average <= 7.9 && school === 'Otro') {
        message = 'Lo sentimos, no cumples con los requisitos para la inscripción.';
    } else if (average >= 8.0 && school === 'Otro') {
        message = 'Lo sentimos, no cumples con los requisitos para la inscripción.';
    } else if (average <= 7.9 && school !== 'Otro') {
        message = 'Lo sentimos, no cumples con los requisitos para la inscripción.';
    } else {
        message = '¡El formulario se ha enviado correctamente!';
    }

    const mailOptions = {
        from: 'ch269297@gmail.com',
        to: email,
        subject: 'Nuevo formulario de inscripción',
        text: `
            Has recibido un nuevo formulario de inscripción:

            Nombre Completo: ${name}
            Bachillerato: ${school}
            Promedio General: ${average}
            Correo Electrónico: ${email}

            ${message}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Mensaje enviado: %s', info.messageId);
        res.send('Formulario enviado correctamente.');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
