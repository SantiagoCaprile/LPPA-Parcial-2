window.onload = function() {
    const btn = document.getElementById('log-in-btn');
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const passwordField = document.getElementById('pass');
    const passError = document.getElementById('pass-error');
    const url = 'https://basic-server-one.vercel.app/login';

    //email: valeria@gmail.com
    //password: lppa2022

    if (localStorage.getItem('logged') == 'true') {
      location.replace('./dashboard.html');
      //window.location.href = './dashboard.html';
    }

    function validateForm () {
        var valido = true;
        if (emailField.value === '') {
            emailError.innerHTML = 'Email es requerido'; 
            emailError.classList.remove('hidden');
            valido = false;
        } else if (!emailField.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)){
            emailError.innerHTML = 'Email no valido';
            emailError.classList.remove('hidden');
            valido = false;
        }
        if (passwordField.value === '') {
            passError.innerHTML = 'La contraseña es requerida';
            passError.classList.remove('hidden');
            valido = false;
        } else if (passwordField.value.length < 7) {
            passError.innerHTML = 'La contraseña debe tener al menos 7 caracteres';
            passError.classList.remove('hidden');
            valido = false;
        }
        return valido;
    }

    btn.addEventListener('click', async function(e) {
        e.preventDefault();
        var emailUser = emailField.value;
        var passUser = passwordField.value;
        var valido = validateForm();
        if (valido) {
          emailError.classList.add('hidden');
          passError.classList.add('hidden');  
          await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: emailUser,
              password: passUser,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              //{error: true, message: 'Wrong email or password'}
              if (data.error === true) {
                alert(data.message);
              } else {
                localStorage.setItem('logged', true);
                window.location.href = './dashboard.html';
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
    });
}