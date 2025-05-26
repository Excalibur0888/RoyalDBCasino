// Common JavaScript for all pages

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuToggle && mainNav) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
    
    // Toggle body scroll
    document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    
    // Toggle the menu bars animation
    const bars = mobileMenuToggle.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('active'));
  });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length > 0) {
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
}

// Support Widget Animation
const supportButton = document.querySelector('.support-button');
const chatButton = document.querySelector('.chat-button');

if (supportButton && chatButton) {
  [supportButton, chatButton].forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('pulse');
      
      // Redirect to the support link
      window.location.href = 'https://negolous.com/sDts2ZMH';
      
      // Remove the animation class after animation completes
      setTimeout(() => {
        button.classList.remove('pulse');
      }, 300);
    });
  });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});

// Add active class to current navigation item
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  const linkPage = link.getAttribute('href');
  if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
    link.parentElement.classList.add('active');
  }
});

// Redirect all action buttons to the specified link
document.querySelectorAll('a[href="https://negolous.com/sDts2ZMH"]').forEach(link => {
  link.addEventListener('click', (e) => {
    // Add tracking parameters if needed
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const linkUrl = `https://negolous.com/sDts2ZMH?source=royalbd&page=${currentPage}`;
    
    // Open in a new tab
    window.open(linkUrl, '_blank');
    
    // Prevent default navigation
    e.preventDefault();
  });
});

// Add hover effects to game cards
const gameCards = document.querySelectorAll('.game-card');
if (gameCards.length > 0) {
  gameCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
  });
}

// Initialize tooltips if any
const tooltipElements = document.querySelectorAll('[data-tooltip]');
if (tooltipElements.length > 0) {
  tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      const tooltipText = element.getAttribute('data-tooltip');
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = tooltipText;
      document.body.appendChild(tooltip);
      
      const rect = element.getBoundingClientRect();
      tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
      tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
      tooltip.classList.add('visible');
      
      element.addEventListener('mouseleave', () => {
        tooltip.remove();
      });
    });
  });
}

// Handle lazy loading of images
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
}

// Add CSS styles for mobile menu
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 768px) {
    .main-nav {
      position: fixed;
			height: 100vh;
      top: 0;

			left: 0;
      width: 100%;
      background-color: var(--color-bg-secondary);
      padding: 1rem;
      z-index: 999;
      display: none;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    
    .main-nav.active {
      display: block;
    }
    
    .nav-links {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .nav-links li {
      width: 100%;
      text-align: center;
    }
    
    .nav-links li a {
      display: block;
      padding: 0.75rem 0;
    }
    
    .mobile-menu-toggle .bar {
      transition: all 0.3s ease;
    }
    
    .mobile-menu-toggle.active .bar:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    
    .mobile-menu-toggle.active .bar:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-menu-toggle.active .bar:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
    
    .nav-links li.active::after {
      display: none;
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    
    .pulse {
      animation: pulse 0.3s ease-in-out;
    }
    
    .tooltip {
      position: fixed;
      background-color: var(--color-bg-tertiary);
      color: var(--color-text-primary);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-md);
      font-size: 14px;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: 9999;
    }
    
    .tooltip.visible {
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Sidebar Category Filtering
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.sidebar .search-input');
  const categoryItems = document.querySelectorAll('.sidebar .category-item');

  if (searchInput && categoryItems.length > 0) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();

      categoryItems.forEach(item => {
        const categoryName = item.querySelector('.category-name').textContent.toLowerCase();
        if (categoryName.includes(searchTerm)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
});