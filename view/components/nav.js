

const navbar = document.querySelector('#navbar');


const createNavSiLogin = () => {
  navbar.innerHTML = ` 
  <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
  <a  href="/" class="font-bold text-xl text-white mr-2 hover:text-#188196 ">Los Zapateros del Juego</a>
  <!-- version movil -->
   
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5"
          stroke="currentColor" 
          class="w-10 h-10 lg:hidden text-black cursor-pointer p-2 hover:bg-#91CEDB rounded-lg"
      >

          <path 
              stroke-linecap="round"
              stroke-linejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
          />
      </svg>
    <!-- Version de escritorio -->

  <div class="hidden lg:flex flex-row gap-2">

  <a id="list" href="/list" class="text-white font-bold  py-2 px-4 rounded-lg transition ease-in-out relative border-gray-700/70 border-b-2">Lista de jugadores</a>
      <a id="stats" href="/stats" class="text-white font-bold  py-2 px-4 rounded-lg transition ease-in-out relative border-gray-700/70 border-b-2">Tu Perfil</a>
       <a id="cerrar" href="/signup" class="text-white font-bold bg-gray-700 hover:bg-gray-800 py-2 px-4 rounded-lg transition ease-in-out">Cerrar Sesion</a>


  </div>

  <!-- Menu Movil -->

  <div class="bg-blue-600 fixed top-16 right-0 left-0 bottom-0 flex-col gap-2 transition-all duration-500 ease-in-out w-0 flex items-end">

  <a id="list" href="/list" class="text-white font-bold  py-2 px-4 rounded-lg transition ease-in-out relative border-gray-700/70 border-b-2">Lista de jugadores</a>
    <a id="stats" href="/stats" class="text-white font-bold  py-2 px-4 rounded-lg transition ease-in-out relative border-gray-700/70 border-b-2">Tu Perfil</a>
   <a id="cerrar" href="/signup" class="text-white font-bold bg-gray-700 hover:bg-gray-800 py-2 px-4 rounded-lg transition ease-in-out relative border-gray-700/70 border-b-2">Cerrar Sesion</a>

  </div>
</div>`;
};
const createNavNoLogin = () => {
  navbar.innerHTML = ` 
  <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
  <a  href="/" class="font-bold text-xl text-white mr-2 hover:text-#188196 ">Los Zapateros del Juego</a>
  <!-- version movil -->
   
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5"
          stroke="currentColor" 
          class="w-10 h-10 lg:hidden text-black cursor-pointer p-2 hover:bg-#91CEDB rounded-lg"
      >

          <path 
              stroke-linecap="round"
              stroke-linejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
          />
      </svg>
    <!-- Version de escritorio -->

  <div class="hidden lg:flex flex-row gap-2">
  <a id="list" href="/list" class="text-white font-bold  py-2 px-4 rounded-lg transition ease-in-out relative border-gray-700/70 border-b-2">Lista de jugadores</a>
       <a href="/login" class="text-black font-bold hover:text-#188196 py-2 px-4 rounded-lg transition ease-in-out">Login</a>
       <a href="/signup" class="text-white font-bold bg-gray-700 hover:bg-gray-800 py-2 px-4 rounded-lg transition ease-in-out">SignUp</a>


  </div>

  <!-- Menu Movil -->

  <div class="bg-blue-600 fixed top-16 right-0 left-0 bottom-0 flex-col gap-2 transition-all duration-500 ease-in-out w-0 flex items-end">

  <a id="list" href="/list" class="text-white font-bold  py-2 px-4 rounded-lg transition ease-in-out relative border-gray-700/70 border-b-2">Lista de jugadores</a>
  <a href="/login" class="text-black font-bold hover:text-#188196 xpy-2 px-4 rounded-lg transition ease-in-out border-gray-700/70 border-b-2">Login</a>
   <a href="/signup" class="text-white font-bold bg-gray-700 hover:bg-gray-800 py-2 px-4 rounded-lg transition ease-in-out relative border-gray-700/70 border-b-2">SignUp</a>

  </div>
</div>`;
};

( async () => {

  const { data } = await axios.get('/api/navs');
  logiado = data.logiado;


  if (window.location.pathname === '/') {

      if (logiado) {-
        createNavSiLogin();
      } else {
        createNavNoLogin();
      }

  } else if (window.location.pathname === '/signup/') {

    if (logiado) {-
      createNavSiLogin();
    } else {
      createNavNoLogin();
    }

  } else if (window.location.pathname === '/login/') {

    if (logiado) {-
      createNavSiLogin();
    } else {
      createNavNoLogin();
    }

  } else if (window.location.pathname === '/stats/') {

    if (logiado) {-
      createNavSiLogin();
    } else {
      createNavNoLogin();
    }

  } else if (window.location.pathname === '/list/') {

    if (logiado) {-
      createNavSiLogin();
    } else {
      createNavNoLogin();
    }

  } 


const body = navbar.parentElement;
const navBtn = navbar.children[0].children[1];
const menuMovil = navbar.children[0].children[3];
const divContainer = navbar.parentElement.children[1];

navBtn.addEventListener('click', e => {
  if (!navBtn.classList.contains('active')) {
    navBtn.classList.add('active');
    navBtn.innerHTML = `  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  `;
    menuMovil.classList.remove('items-end');
    menuMovil.classList.add('items-center');
    menuMovil.classList.remove('w-0');
    menuMovil.classList.add('w-4/5');
  
   // translate-x-1/2
    
  } else {
    navBtn.classList.remove('active');
    navBtn.innerHTML = `<path 
   stroke-linecap="round"
    stroke-linejoin="round" 
   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
    />`;
    menuMovil.classList.add('items-end');
    menuMovil.classList.remove('items-center');
    menuMovil.classList.add('w-0');
    menuMovil.classList.remove('w-4/5'); 

  }


});

const cerrarBtn  = document.querySelectorAll('#cerrar');

cerrarBtn.forEach(btn => {
  btn.addEventListener('click', async e => {
    try {
      await axios.get('/api/logout');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  });
});

})();