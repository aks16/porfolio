// --------------------
// Smooth scroll on nav links
// --------------------
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // --------------------
  // Machine à écrire sur le nom (optionnel si tu as une div avec .typed-text)
  // --------------------
  const textElement = document.querySelector('.hero-logo + .typed-text');
  if (textElement) {
    const text = "Créatif numérique & UI/UX designer";
    let i = 0;
  
    function typeWriter() {
      if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
      }
    }
    typeWriter();
  }
  
  // --------------------
  // Confirmation formulaire (simulée)
  // --------------------
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci pour votre message !");
    form.reset();
  });
  
