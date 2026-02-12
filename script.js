// ========================================
// BHAVYA TYAGI — PORTFOLIO (Revamped 2025)
// Pure vanilla JS, zero dependencies
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Loader ---
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 400);
  });
  // Fallback in case load already fired
  if (document.readyState === 'complete') {
    setTimeout(() => loader.classList.add('hidden'), 400);
  }

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');

  window.addEventListener('scroll', () => {
    // Navbar background
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = scrollPercent + '%';
  });

  // --- Active nav link highlight ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const highlightNav = () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav);
  highlightNav();

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinksEl.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinksEl.classList.remove('open');
    });
  });

  // --- Reveal on scroll ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Skill bar animation ---
  const skillFills = document.querySelectorAll('.skill-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  skillFills.forEach(fill => skillObserver.observe(fill));

  // --- Floating particles in hero ---
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const colors = [
      '232,168,109',  // warm amber
      '196,122,90',   // rust
      '125,170,140',  // sage
    ];

    // Glowing orbs (large, soft)
    for (let i = 0; i < 8; i++) {
      const orb = document.createElement('div');
      const size = Math.random() * 160 + 80;
      const color = colors[Math.floor(Math.random() * colors.length)];
      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(${color},0.12) 0%, transparent 70%);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatOrb ${Math.random() * 10 + 10}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
      `;
      particlesContainer.appendChild(orb);
    }

    // Small bright dots (more of them, brighter)
    for (let i = 0; i < 60; i++) {
      const dot = document.createElement('div');
      const size = Math.random() * 3 + 0.8;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * 0.6 + 0.25;
      dot.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(${color},${opacity});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatDot ${Math.random() * 8 + 5}s ease-in-out infinite;
        animation-delay: ${Math.random() * 6}s;
        box-shadow: 0 0 ${size * 4}px rgba(${color},${opacity * 0.6});
      `;
      particlesContainer.appendChild(dot);
    }

    // Drifting lines
    for (let i = 0; i < 12; i++) {
      const line = document.createElement('div');
      const width = Math.random() * 100 + 40;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const angle = Math.random() * 180;
      line.style.cssText = `
        position: absolute;
        width: ${width}px;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(${color},0.2), transparent);
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        transform: rotate(${angle}deg);
        animation: floatLine ${Math.random() * 12 + 8}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
      `;
      particlesContainer.appendChild(line);
    }

    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatOrb {
        0%, 100% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(30px, -20px) scale(1.1); }
        50% { transform: translate(-20px, 15px) scale(0.95); }
        75% { transform: translate(15px, 25px) scale(1.05); }
      }
      @keyframes floatDot {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
        25% { transform: translateY(-25px) translateX(12px); opacity: 0.8; }
        50% { transform: translateY(-50px) translateX(-8px); opacity: 0.5; }
        75% { transform: translateY(-20px) translateX(18px); opacity: 1; }
      }
      @keyframes floatLine {
        0%, 100% { transform: rotate(var(--r, 0deg)) translateX(0); opacity: 0.3; }
        50% { transform: rotate(var(--r, 0deg)) translateX(40px); opacity: 0.7; }
      }
    `;
    document.head.appendChild(style);
  }

  // --- Blog Carousel ---
  const carousel = document.getElementById('blogCarousel');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');

  if (carousel && dotsContainer) {
    const cards = carousel.querySelectorAll('.carousel-card');
    const cardCount = cards.length;

    // Create dots
    cards.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => scrollToCard(i));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function scrollToCard(index) {
      const card = cards[index];
      if (card) {
        carousel.scrollTo({
          left: card.offsetLeft - carousel.offsetLeft,
          behavior: 'smooth'
        });
      }
    }

    function updateDots() {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = cards[0].offsetWidth + 24; // gap
      const activeIndex = Math.round(scrollLeft / cardWidth);
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
      });
    }

    carousel.addEventListener('scroll', updateDots);

    prevBtn.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth + 24;
      carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth + 24;
      carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  }

  // --- Contact form ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button');
      btn.innerHTML = '<span>Sent!</span><i class="fas fa-check"></i>';
      btn.style.background = 'linear-gradient(135deg, #00c853, #00d4ff)';
      setTimeout(() => {
        btn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        btn.style.background = '';
        contactForm.reset();
      }, 2000);
    });
  }

});
