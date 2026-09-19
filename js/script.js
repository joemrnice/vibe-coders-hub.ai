/**
 * Vibe Coders Hub — Modular Client-Side JavaScript
 * Static & GitHub Pages Compatible
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTerminalSimulation();
  initScrollAnimations();
  initFormspreeSubmission();
  initFooterYear();
});

/* --------------------------------------------------------------------------
   1. Sticky Header & Mobile Navigation
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Add background glassmorphism class on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.contains('nav-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('nav-open') && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    mainNav.classList.add('nav-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close navigation menu');
  }

  function closeMobileMenu() {
    mainNav.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  }

  // Close mobile menu when nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Highlight active section link on scroll
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${activeId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(sec => observer.observe(sec));
  }
}

/* --------------------------------------------------------------------------
   2. Terminal Interactive Simulation
   -------------------------------------------------------------------------- */
function initTerminalSimulation() {
  const terminalWindow = document.getElementById('terminal-window');
  const typedCommand = document.getElementById('typed-command');
  const terminalOutput = document.getElementById('terminal-output');

  if (!terminalWindow || !typedCommand || !terminalOutput) return;

  const samplePrompts = [
    {
      cmd: 'vibe generate --app="ai-code-auditor"',
      logs: [
        '> scanning repository AST...',
        '> checking accessibility (WCAG 2.2 AA)...',
        '> verifying clean code standards...',
        '> 0 vulnerabilities, 100% test coverage target achieved!'
      ]
    },
    {
      cmd: 'vibe prompt --preset="fullstack-architect"',
      logs: [
        '> setting up modern CSS custom properties...',
        '> configuring zero-dependency JS modules...',
        '> optimizing static deployment for GitHub Pages...',
        '> project structure ready for production!'
      ]
    },
    {
      cmd: 'vibe deploy --target="github-pages"',
      logs: [
        '> compiling static assets...',
        '> attaching Formspree contact endpoints...',
        '> verifying dark cyber aesthetic...',
        '> deployed successfully! Live at Vibe Coders Hub.'
      ]
    }
  ];

  let currentPromptIndex = 0;
  let isTyping = false;

  terminalWindow.addEventListener('click', runNextSimulation);
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.activeElement === document.body) {
      const hero = document.getElementById('home');
      const rect = hero.getBoundingClientRect();
      if (rect.top >= -300 && rect.bottom <= window.innerHeight + 300) {
        e.preventDefault();
        runNextSimulation();
      }
    }
  });

  function runNextSimulation() {
    if (isTyping) return;
    isTyping = true;

    currentPromptIndex = (currentPromptIndex + 1) % samplePrompts.length;
    const item = samplePrompts[currentPromptIndex];

    typedCommand.textContent = '';
    terminalOutput.innerHTML = '';

    let charIdx = 0;
    const typeInterval = setInterval(() => {
      typedCommand.textContent += item.cmd[charIdx];
      charIdx++;
      if (charIdx >= item.cmd.length) {
        clearInterval(typeInterval);
        setTimeout(() => displayLogs(item.logs), 300);
      }
    }, 40);
  }

  function displayLogs(logs) {
    logs.forEach((log, index) => {
      setTimeout(() => {
        const p = document.createElement('p');
        p.className = index === logs.length - 1 ? 'out-highlight' : 'out-success';
        p.textContent = log;
        terminalOutput.appendChild(p);
        if (index === logs.length - 1) {
          isTyping = false;
        }
      }, index * 250);
    });
  }
}

/* --------------------------------------------------------------------------
   3. Scroll Reveal Micro-Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll('.value-card, .build-card, .persona-card, .workflow-step, .feature-item, .principle-item');

  elementsToAnimate.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(el => observer.observe(el));
  } else {
    elementsToAnimate.forEach(el => el.classList.add('revealed'));
  }
}

/* --------------------------------------------------------------------------
   4. Formspree Form Submission (AJAX & Progressive Enhancement)
   -------------------------------------------------------------------------- */
function initFormspreeSubmission() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('submit-btn');
  const successBox = document.getElementById('form-success');
  const errorBox = document.getElementById('form-error');
  const errorText = document.getElementById('form-error-text');

  form.addEventListener('submit', async (e) => {
    // Basic client validation
    if (!validateForm(form)) {
      e.preventDefault();
      return;
    }

    // Check if user has replaced placeholder Formspree ID
    const actionUrl = form.getAttribute('action');
    const isPlaceholder = actionUrl.includes('YOUR_FORM_ID');

    // Progressive AJAX submission
    e.preventDefault();

    // Hide existing alerts
    successBox.style.display = 'none';
    errorBox.style.display = 'none';

    if (isPlaceholder) {
      errorText.textContent = 'Note: The contact form is in preview mode. The repository owner needs to replace "YOUR_FORM_ID" in index.html with a valid Formspree ID to receive messages.';
      errorBox.style.display = 'flex';
      return;
    }

    // Disable button & show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('btn-loading');

    try {
      const formData = new FormData(form);
      const response = await fetch(actionUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        clearValidationErrors(form);
        successBox.style.display = 'flex';
        successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        const json = await response.json().catch(() => ({}));
        if (json && json.errors && json.errors.length > 0) {
          errorText.textContent = json.errors.map(err => err.message).join(', ');
        } else {
          errorText.textContent = 'Submission error. Please check your form details and try again.';
        }
        errorBox.style.display = 'flex';
      }
    } catch (err) {
      errorText.textContent = 'Network error. Please check your internet connection and try again.';
      errorBox.style.display = 'flex';
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('btn-loading');
    }
  });

  // Real-time input clearing of errors
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      const errorSpan = document.getElementById(`${input.id}-error`);
      if (errorSpan) errorSpan.textContent = '';
      input.style.borderColor = '';
    });
  });
}

function validateForm(form) {
  let isValid = true;

  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const subjectInput = form.querySelector('#subject');
  const messageInput = form.querySelector('#message');

  // Name validation
  if (!nameInput.value.trim()) {
    showFieldError(nameInput, 'Name is required.');
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim()) {
    showFieldError(emailInput, 'Email address is required.');
    isValid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    showFieldError(emailInput, 'Please enter a valid email address.');
    isValid = false;
  }

  // Subject validation
  if (!subjectInput.value.trim()) {
    showFieldError(subjectInput, 'Subject is required.');
    isValid = false;
  }

  // Message validation
  if (!messageInput.value.trim()) {
    showFieldError(messageInput, 'Message is required.');
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    showFieldError(messageInput, 'Message should be at least 10 characters long.');
    isValid = false;
  }

  return isValid;
}

function showFieldError(inputEl, message) {
  const errorSpan = document.getElementById(`${inputEl.id}-error`);
  if (errorSpan) {
    errorSpan.textContent = message;
  }
  inputEl.style.borderColor = '#ef4444';
}

function clearValidationErrors(form) {
  form.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
  form.querySelectorAll('input, textarea').forEach(el => el.style.borderColor = '');
}

/* --------------------------------------------------------------------------
   5. Dynamic Copyright Year
   -------------------------------------------------------------------------- */
function initFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
