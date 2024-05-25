// Importa las funciones que necesitas del SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBd8VEqwpRCytHpmPTOGAn7vfJVpZknpbg",
    authDomain: "inscripciones-bbaf3.firebaseapp.com",
    projectId: "inscripciones-bbaf3",
    storageBucket: "inscripciones-bbaf3.appspot.com",
    messagingSenderId: "679964288319",
    appId: "1:679964288319:web:e33df3d48d5cce0ee1df8a",
    measurementId: "G-24SRJMJYKZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Obtén una referencia a la base de datos Firestore
const db = getFirestore(app);

// Obtener el formulario
const signupForm = document.getElementById('signup-form');

// Escuchar el evento de envío del formulario
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const school = document.getElementById('school').value;
    const average = document.getElementById('average').value;
    const phone = document.getElementById('phone').value;
    const curp = document.getElementById('curp').value;
    const rfc = document.getElementById('rfc').value || null;
    const personType = document.getElementById('person-type').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const colony = document.getElementById('colony').value;
    const extNumber = document.getElementById('ext-number').value;
    const state = document.getElementById('state').value;
    const municipality = document.getElementById('municipality').value;
    const locality = document.getElementById('locality').value;
    const postalCode = document.getElementById('postal-code').value;
    const email = document.getElementById('email').value;

    try {
        // Guardar los datos en Firestore
        await addDoc(collection(db, 'students'), {
            name: name,
            school: school,
            average: average,
            phone: phone,
            curp: curp,
            rfc: rfc,
            personType: personType,
            gender: gender,
            address: address,
            colony: colony,
            extNumber: extNumber,
            state: state,
            municipality: municipality,
            locality: locality,
            postalCode: postalCode,
            email: email
        });
        alert('Inscripción exitosa');
        signupForm.reset();
    } catch (error) {
        console.error('Error al inscribir al alumno: ', error);
    }
});