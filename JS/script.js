//Slideshow da home
var slideIndex = [1, 1];
var slideId = ["mySlides1"];

showSlides(1, 0);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
  }

function logout() {
localStorage.removeItem('logado');
window.location.href = 'login.html';
}

// Verifica se o usuário está logado
var logado = localStorage.getItem('logado');
if (!logado) {
window.location.href = 'login.html';
}

// Atualiza a data e hora atual
function updateDateTime() {
    var datetimeElement = document.querySelector('.datetime');
    var now = new Date();
    datetimeElement.textContent = 'Data e Hora atual: ' + now.toLocaleString();
  }

    // Atualiza a data e hora inicial
    updateDateTime();

    // Atualiza a data e hora a cada segundo
    setInterval(updateDateTime, 1000);