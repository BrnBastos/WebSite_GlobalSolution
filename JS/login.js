function login() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    
    if (username === 'Admin' && password === '123456') {
       window.location.href = 'https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021';
    } 
    else if (username === 'Usuario' && password === '123456') {
        localStorage.setItem('logado', 'true');
        window.location.href = 'index.html';
    
    } else {
        document.getElementById('error-message').textContent = 'Usuário ou senha inválidos';
    }
    }