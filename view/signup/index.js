import { createNotification } from '../components/notification.js';

// Querys

const form = document.querySelector('#form');
const nameInput = document.querySelector('#nombre');
const partidasGanadas = document.querySelector('#partidas-ganadas');
const partidasPerdidas = document.querySelector('#partidas-perdidas');
const zapatos = document.querySelector('#zapatos');



const formBtn = document.querySelector('#formBtn');
const notification = document.querySelector('#notification');

// Regex validations

const EMAIL_VALIDATION = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
const PASSWORD_VALIDATION = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const NAME_VALIDATION = /^[A-Z\u00d1][a-zA-Zÿí\u00f1\u00d1]+(\s*[A-Z\u00d1][a-zA-Zÿí\u00f1\u00d1]*)$/;


// Validation

form.addEventListener('submit', async e => {
  e.preventDefault();

  try {

    const name = nameInput.value.trim();

   if (name ==='') {
    createNotification(true, 'No puede estar vacio');

    setTimeout(() => {
      notification.innerHTML= '';
    }, 5000);

   } else {
    const newUser = {
      name: name,
    };


    // formBtn.setAttribute('disabled', true);

    const { data } = await axios.post('/api/users', newUser);


    createNotification(false, data);

    setTimeout(() => {
      notification.innerHTML= '';
    }, 5000);

    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    matchInput.value = '';




   }
  } catch (error) {
    console.log(error);
    createNotification(true, error.response.data.error);


    setTimeout(() => {
      notification.innerHTML= '';
    }, 5000);

  }


});