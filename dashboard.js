window.onload = function() {
    const btnOut = document.getElementById('log-out-btn');

    btnOut.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.setItem('logged', false);
        window.location.href = './index.html';
    });
}