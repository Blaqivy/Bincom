let carousel = document.querySelector('.carousel');
  let slides = document.querySelectorAll('.frame');

  let index = 0;
  let totalSlides = slides.length;

  setInterval(() => {
    index = (index + 1) % totalSlides;
    carousel.style.transform = `translateX(${-index * 100}%)`;
  }, 3000); // Change slide every 3 seconds
  const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// responsive navigation with smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.toggle');
    const links = document.querySelector('.links');

    // Toggle the 'show' class on the links when the toggle button is clicked
    toggle.addEventListener('click', function () {
      links.classList.toggle('show');
    });

    // Close the navigation when a link is clicked (for small screens)
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('show');
      }
    });

    // Smooth scroll to the target section when a link is clicked
    document.querySelectorAll('.links a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('.container').offsetHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  });