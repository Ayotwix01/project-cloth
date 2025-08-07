function registerUser(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  if (localStorage.getItem(username)) {
    alert('User already exists. Try logging in.');
    return false;
  }

  localStorage.setItem(username, password);
  alert('Registration successful! Please log in.');
  window.location.href = 'index.html';
}

function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const storedPassword = localStorage.getItem(username);

  if (!storedPassword) {
    alert('User not found. Please sign up.');
    return false;
  }

  if (storedPassword !== password) {
    alert('Incorrect password.');
    return false;
  }

  localStorage.setItem('loggedInUser', username);
  window.location.href = 'home.html';
}
  function submitForm(event){
    event.preventDefault();
    alert("Thank you for contacting us!");
    document.getElementById('contact-form').reset();
  }
  
  const scrollBtn = document.getElementById('scroll-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });