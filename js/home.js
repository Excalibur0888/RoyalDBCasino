// Home Page JavaScript

// Hero Slider Functionality
const heroSlides = document.querySelectorAll('.hero-slide');
const heroControls = document.querySelectorAll('.hero-control');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  // Hide all slides
  heroSlides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Remove active class from all controls
  heroControls.forEach(control => {
    control.classList.remove('active');
  });
  
  // Show the current slide
  heroSlides[index].classList.add('active');
  
  // Add active class to current control
  heroControls[index].classList.add('active');
  
  // Update current slide index
  currentSlide = index;
}

function nextSlide() {
  let next = currentSlide + 1;
  if (next >= heroSlides.length) {
    next = 0;
  }
  showSlide(next);
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

// Add click event listeners to controls
if (heroControls.length > 0) {
  heroControls.forEach((control, index) => {
    control.addEventListener('click', () => {
      showSlide(index);
      stopSlideShow();
      startSlideShow();
    });
  });
  
  // Start the slideshow
  startSlideShow();
  
  // Pause slideshow on hover
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopSlideShow);
    heroSection.addEventListener('mouseleave', startSlideShow);
  }
}

// Feature Cards Animation
const featureCards = document.querySelectorAll('.feature-card');
if (featureCards.length > 0) {
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
      
      // Add a subtle icon animation
      const icon = card.querySelector('.feature-icon');
      if (icon) {
        icon.style.transform = 'translateY(-5px)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
      
      // Reset icon position
      const icon = card.querySelector('.feature-icon');
      if (icon) {
        icon.style.transform = 'translateY(0)';
      }
    });
  });
}

// Testimonial Cards Animation
const testimonialCards = document.querySelectorAll('.testimonial-card');
if (testimonialCards.length > 0) {
  testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      card.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    });
  });
}

// Security Badge Animation
const securityBadge = document.querySelector('.security-badge');
if (securityBadge) {
  securityBadge.addEventListener('mouseenter', () => {
    securityBadge.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
    securityBadge.style.transition = 'background-color 0.3s ease';
    
    const icon = securityBadge.querySelector('i');
    if (icon) {
      icon.style.transform = 'rotate(10deg)';
      icon.style.transition = 'transform 0.3s ease';
    }
  });
  
  securityBadge.addEventListener('mouseleave', () => {
    securityBadge.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
    
    const icon = securityBadge.querySelector('i');
    if (icon) {
      icon.style.transform = 'rotate(0)';
    }
  });
}

// CTA Buttons Hover Effect
const ctaButtons = document.querySelectorAll('.btn-cta');
if (ctaButtons.length > 0) {
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-5px)';
      button.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
      button.style.transition = 'all 0.3s ease';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    });
  });
}

// Initialize the first slide on page load
if (heroSlides.length > 0) {
  showSlide(0);
}

// Add fade-in animation for page sections on scroll
if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('.features-section, .welcome-section, .testimonials-section');
  
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    sectionObserver.observe(section);
  });
  
  // Add CSS for the fade-in effect
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}