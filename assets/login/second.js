const form = document.querySelector('loginForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('email').value;
    const password = document.getElementById('password').value;
    if (email === 'seuemail@exemplo.com' && password === 'suasenha') {
        window.location.href = '';
    }else {
        alert('Credenciais incorretas. Por favor, tente novamente.');
    }
});