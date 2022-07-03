window.onload = function() {
    const btn = document.getElementById('log-in-btn');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('pass');
    const url = "https://basic-server-one.vercel.app/login";

    //email: valeria@gmail.com
    //password: lppa2022

    btn.addEventListener('click', async function(e) {
        e.preventDefault();
        var emailUser = emailField.value;
        var passUser = passwordField.value;
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailUser,
                    password: passUser
                })
            })
            .then(res => res.json())
            .then(data => {
                //{error: true, message: 'Wrong email or password'}
                if (data.error === true) {
                    alert(data.message);
                } else {
                    window.location.href = './dashboard.html';
                }
            })
            .catch(error => {
                console.log(error);
            }
            );
    })
}