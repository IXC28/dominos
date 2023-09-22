const name = document.querySelector('#nombre');
const passwordInput = document.querySelector('#password-input');
const form = document.querySelector('#form');
const errorText = document.querySelector('#error-text');

form.addEventListener('submit', async e => {
  e.preventDefault();

  try {
    const user = {

      name: name.value,

    };

    await axios.post('/api/login', user);

    
    window.location.pathname = `/login/`;

  } catch (error) {

    console.log(error);

    errorText.innerHTML = error.response.data.error;

  }

});