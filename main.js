// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  // Show a usable contact address even in browsers without a mailto handler.
  const emailDialog = document.querySelector('#email-dialog');
  if (emailDialog && typeof emailDialog.showModal === 'function') {
    const copyStatus = emailDialog.querySelector('.email-copy-status');
    document.querySelectorAll('a[href="mailto:jiazheng@mail.ustc.edu.cn"]:not([data-email-compose])').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        copyStatus.textContent = '';
        emailDialog.showModal();
      });
    });
    emailDialog.querySelector('.email-copy').addEventListener('click', async function () {
      try {
        await navigator.clipboard.writeText('jiazheng@mail.ustc.edu.cn');
        copyStatus.textContent = 'Email address copied.';
      } catch (error) {
        copyStatus.textContent = 'Please select and copy the email address above.';
      }
    });
  }

  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.navbar-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // Hero background carousel (cross-fade between slides)
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let current = 0;
    const interval = 5000; // ms per slide

    setInterval(function () {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, interval);
  }

  // Fade-in animation on scroll
  const fadeEls = document.querySelectorAll('.fade-in');

  function checkFade() {
    fadeEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  checkFade();
  window.addEventListener('scroll', checkFade, { passive: true });
});
