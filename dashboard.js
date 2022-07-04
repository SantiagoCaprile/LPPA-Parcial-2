window.onload = function() {
    const btnOut = document.getElementById('log-out-btn');
    const tableBody = document.getElementById('table-body');
    const url = 'https://basic-server-one.vercel.app/users';

    btnOut.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('logged');
        window.location.href = './index.html';
    });
    
    function createRow(user) {
        const row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.innerHTML = user.name;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = user.email;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = user.address.city;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = user.phone;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = user.website;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = user.company.name;
        row.appendChild(cell);
        return row;
    }
    async function fillTable() {
        const res = await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.data.forEach(user => {
                tableBody.appendChild(createRow(user));
            });
        }
        );
    }
    fillTable();
}