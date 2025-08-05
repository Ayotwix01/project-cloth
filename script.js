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

  
