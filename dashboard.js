window.onload = function() {
    const btnOut = document.getElementById('log-out-btn');

    btnOut.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('logged');
        window.location.href = './index.html';
    });
}