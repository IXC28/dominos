const name = document.querySelector('#nombre');
const passwordInput = document.querySelector('#password-input');
const form = document.querySelector('#form');
const errorText = document.querySelector('#error-text');

form.addEventListener('submit', async e => {
  e.preventDefault();

  try {
  const cleanName = name.value.trim(); 
    if (cleanName === "") {
      
      createNotification(true, 'No puede estar vacio');

      setTimeout(() => {
        notification.innerHTML= '';
      }, 5000);

      } else {
      const user = {

        name: cleanName,
  
      };
  
      await axios.post('/api/login', user);
  
      
      window.location.pathname = `/stats/`;
    }

  } catch (error) {

    console.log(error);

    errorText.innerHTML = error.response.data.error;

  }

});