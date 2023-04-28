const adminLoginForm = document.getElementById('admin-login-form');
  const popup = document.querySelector('.popup');
  const body = document.querySelector('body');

  adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = e.target.adminPassword.value;
    if (password === '#cook1es!') {
      body.classList.remove('disabled');
      popup.style.display = 'none';
    } else {
      alert('Invalid password. Please try again.');
    }
  });