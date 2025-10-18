function toggleMobileMenu() {
  const menu = document.querySelector('[data-menu]');
  const toggleButton = document.querySelector('[data-menu-toggle]');

  if (!menu || !toggleButton) {
    return;
  }

  const isOpen = menu.classList.toggle('is-open');
  toggleButton.setAttribute('aria-expanded', String(isOpen));
}

function initializeNavigation() {
  const toggleButton = document.querySelector('[data-menu-toggle]');

  if (!toggleButton) {
    return;
  }

  toggleButton.addEventListener('click', toggleMobileMenu);
}

document.addEventListener('DOMContentLoaded', initializeNavigation);

function initializeSite() {
  const currentYear = document.getElementById('current-year');

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear().toString();
  }

  // Additional interactive features can be initialized here.
}

document.addEventListener('DOMContentLoaded', initializeSite);
