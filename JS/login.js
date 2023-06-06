function login() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    
    if (username === 'Admin' && password === '123456') {
        localStorage.setItem('logado', 'true');
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').textContent = 'Usuário ou senha inválidos';
    }
    }